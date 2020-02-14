import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

const PageHeader = ({ siteTitle, pageTitle }) => (
  <Helmet
    defaultTitle={siteTitle}
    title={pageTitle}
    titleTemplate={`%s - ${siteTitle}`}
    htmlAttributes={{ lang: "vi" }}
    meta={[{ charSet: "utf-8" }]}
  >
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Helmet>
);

const mapStateToProps = state => ({
  ...state.app
});

export default connect(mapStateToProps)(PageHeader);
