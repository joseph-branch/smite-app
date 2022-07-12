import { createContext, useMemo, useState } from "react";

import { useProcedure } from "../../src/hooks/useProcedure";

export interface SessionContextData {
  sessionId: string | null;
}

export const SessionContext = createContext<SessionContextData>({
  sessionId: null,
});

export const SessionContextProvider: React.FC<any> = ({ children }) => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  const { execute: getRecentSessionId } = useProcedure<null, string>(
    "getSessionId"
  );

  useMemo(async () => {
    const session = await getRecentSessionId(null);

    console.log(session);

    if (!session.error && session.result) {
      setSessionId(session.result);
    }
  }, [getRecentSessionId, setSessionId]);

  return (
    <SessionContext.Provider value={{ sessionId }}>
      {children}
    </SessionContext.Provider>
  );
};
