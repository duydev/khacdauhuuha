import App from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import store from "../redux/store";
import theme from "../theme";

import PageHeader from "../containers/PageHeader";
import Layout from "../containers/Layout";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PageHeader />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
