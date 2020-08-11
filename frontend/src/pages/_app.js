import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { siteName, siteDescription, siteImage, domain } from '../constants/app';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{siteName}</title>
        <meta key="description" name="description" content={siteDescription} />

        <meta
          key="viewport"
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link rel="icon" href="/favicon.ico" />

        {/* Google Search Meta Tags */}
        <meta key="google-name" itemprop="name" content={siteName} />
        <meta
          key="google-description"
          itemprop="description"
          content={siteDescription}
        />
        <meta key="google-image" itemprop="image" content={siteImage} />

        {/* Facebook Meta Tags */}
        <meta key="fb-url" property="og:url" content={domain} />
        <meta key="fb-type" property="og:type" content="website" />
        <meta key="fb-title" property="og:title" content={siteName} />
        <meta
          key="fb-description"
          property="og:description"
          content={siteDescription}
        />
        <meta key="fb-image" property="og:image" content={siteImage} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
