import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FooterWrapper } from "../components/Footer";
import HeaderWrapper from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeaderWrapper />
        <Component {...pageProps} />
        <FooterWrapper />
      </ThemeProvider>
    </>
  );
}
