import React from "react";
import { connect } from "react-redux";

import Layout from "../containers/Layout";

class HomePage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Trang Chủ">
        <div>Hello World</div>
      </Layout>
    );
  }
}

export default connect()(HomePage);
