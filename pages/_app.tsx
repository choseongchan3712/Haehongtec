import Main from "@/components/global/Main";
import { notoSansKR } from "@/fonts";
import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSansKR.className}>
      <GlobalStyle />
      <Main>
      <Component {...pageProps} />
      </Main>
    </div>
  );
}
