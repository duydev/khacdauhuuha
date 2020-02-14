import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import store from "../redux/store";
import theme from "../theme";

import PageHeader from "../containers/PageHeader";
import Layout from "../containers/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageHeader />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
