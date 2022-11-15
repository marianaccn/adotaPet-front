import { ThemeProvider } from 'styled-components';
import { Colors } from '@styles/theme';
import { GlobalStyle } from '@styles/global-style';
import { Layout } from '@components/layout';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Lalezar&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={Colors}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
