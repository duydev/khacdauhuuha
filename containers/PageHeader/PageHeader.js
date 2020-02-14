import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

const PageHeader = ({ siteTitle, pageTitle }) => (
  <Helmet
    defaultTitle={siteTitle}
    title={pageTitle}
    titleTemplate={`%s - ${siteTitle}`}
    htmlAttributes={{ lang: "vi" }}
    meta={[{ charSet: "utf-8" }]}
  />
);

PageHeader.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  pageTitle: PropTypes.string
};

const mapStateToProps = state => ({
  siteTitle: state.app.siteTitle,
  pageTitle: state.app.pageTitle
});

export default connect(mapStateToProps)(PageHeader);
