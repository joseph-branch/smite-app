import { useCallback, useEffect, useState } from "react";

export interface UseProcedureResult<TResult> {
  error: Error | null;
  result: TResult | null;
}

export interface UseProcedureHookResult<TParams, TResult>
  extends UseProcedureResult<TResult> {
  loading: boolean;

  execute: (
    // eslint-disable-next-line no-unused-vars
    params: TParams,
    // eslint-disable-next-line no-unused-vars
    headers?: Record<string, string>
  ) => Promise<UseProcedureResult<TResult>>;
  executionCount: number;
}

export const useProcedure = <TParams, TResult>(
  methodName: string,
  baseUrl?: string
): UseProcedureHookResult<TParams, TResult> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<TResult | null>(null);
  const [executionCount, setExecutionCount] = useState(0);

  const execute = useCallback(
    async (params: TParams, headers: Record<string, string> = {}) => {
      const id = new Date().getTime();
      const body = {
        id,
        jsonrpc: "2.0",
        method: methodName,
        params,
      };

      headers["Content-Type"] = "application/json";

      setError(null);
      setLoading(true);

      try {
        const localUrl = "http://localhost:3000";

        const finalUrl = baseUrl
          ? new URL(`/api/jsonrpc`, baseUrl).href
          : `${localUrl}/api/jsonrpc`;

        const response = await fetch(finalUrl, {
          body: JSON.stringify(body),
          headers,
          method: "POST",
        });

        const { data: parsedResponse } = await response.json();

        if (parsedResponse.error) {
          const error: Error = {
            message: parsedResponse.error.message,
            name: `JRPCError`,
          };

          setError(error);
          return { error, result: null };
        } else {
          const result = parsedResponse.result as TResult;
          setResult(result);
          return { error: null, result };
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setResult(null);
        setError(err);
        return { error: err, result: null };
      } finally {
        setLoading(false);
        setExecutionCount((current) => ++current);
      }
    },
    [methodName, baseUrl]
  );
  useEffect(() => {
    setExecutionCount(0);
  }, [execute]);

  return {
    error,
    execute,
    loading,
    result,
    executionCount,
  };
};
