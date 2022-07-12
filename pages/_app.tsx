import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CreateSessionArgs } from "../common/types/session";
import { TwoColumnLayout } from "../src/components/layouts/TwoColumnLayout";
import { platform } from "../common/enums";
import { useMemo } from "react";
import { useProcedure } from "../src/hooks/useProcedure";

function MyApp({ Component, pageProps }: AppProps) {
  const { execute, loading, result } = useProcedure<CreateSessionArgs, string>(
    "createSession"
  );

  useMemo(async () => {
    const url = await execute({ platform: platform.XBOX });

    console.log(url.result);
  }, []);

  return (
    <TwoColumnLayout>
      <Component {...pageProps} />
    </TwoColumnLayout>
  );
}

export default MyApp;
