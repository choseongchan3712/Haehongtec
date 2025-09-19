import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Main from "@/components/global/Main";
import TestWrap from "@/components/TestWrap";
import { notoSansKR } from "@/fonts";
import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSansKR.className}>
      <GlobalStyle />
      <Header />
      <Main>
        <TestWrap>
          <Component {...pageProps} />
        </TestWrap>
      </Main>
      <Footer />
    </div>
  );
}
