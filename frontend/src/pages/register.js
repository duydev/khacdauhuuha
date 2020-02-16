import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import Layout from "../containers/Layout";
import RegisterForm from "../containers/RegisterForm";

import styles from "./styles/register";

class RegisterPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout pageTitle="Đăng ký">
        <div className={classes.root}>
          <RegisterForm />
        </div>
      </Layout>
    );
  }
}

export default compose(
  connect(),
  withStyles(styles, { name: "RegisterPage" })
)(RegisterPage);
