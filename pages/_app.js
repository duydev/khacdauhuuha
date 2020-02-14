import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import store from "../redux/store";
import theme from "../theme";

import PageHeader from "../containers/PageHeader";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageHeader />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
