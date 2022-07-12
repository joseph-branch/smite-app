import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CreateSessionArgs } from "../common/types/session";
import { SessionContextProvider } from "../common/contexts/SessionContext";
import { TwoColumnLayout } from "../src/components/layouts/TwoColumnLayout";
import { platform } from "../common/enums";
import { useMemo } from "react";
import { useProcedure } from "../src/hooks/useProcedure";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider>
      <TwoColumnLayout>
        <Component {...pageProps} />
      </TwoColumnLayout>
    </SessionContextProvider>
  );
}

export default MyApp;
