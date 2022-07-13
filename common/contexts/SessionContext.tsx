import { createContext, useEffect, useMemo, useState } from "react";

import { useProcedure } from "../../src/hooks/useProcedure";

export interface SessionContextData {
  sessionId: string | null;
  setSessionId: (sessionId: string | null) => void;
}

export const SessionContext = createContext<SessionContextData>({
  sessionId: null,
  setSessionId: () => {},
});

export const SessionContextProvider: React.FC<any> = ({ children }) => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  const { execute: getRecentSessionId, result: session } = useProcedure<
    null,
    string
  >("getSessionId");

  useEffect(() => {
    getRecentSessionId(null);
  }, [getRecentSessionId]);

  useMemo(async () => {
    if (!session) return undefined;

    setSessionId(session);
  }, [setSessionId, session]);

  return (
    <SessionContext.Provider value={{ sessionId, setSessionId }}>
      {children}
    </SessionContext.Provider>
  );
};
