import "../styles/globals.css";

import type { AppProps } from "next/app";
import { TwoColumnLayout } from "../src/components/layouts/TwoColumnLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TwoColumnLayout>
      <Component {...pageProps} />
    </TwoColumnLayout>
  );
}

export default MyApp;
