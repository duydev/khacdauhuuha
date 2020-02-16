import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withStyles } from "@material-ui/core";

import FormHelper from "../../helpers/form";

import styles from "./styles";

class RegisterForm extends React.Component {
  static validate = values => {
    const errors = {};

    const requiredFields = ["email", "password"];

    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = "Required";
      }
    });

    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  handleSubmit = values => {
    console.log(values);
  };

  render() {
    const { classes, handleSubmit } = this.props;

    return (
      <form className={classes.root} onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name="email"
          component={FormHelper.textField}
          type="email"
          required
          fullWidth
          label="Email:"
        />
        <Field
          name="password"
          component={FormHelper.textField}
          type="password"
          required
          fullWidth
          label="Password:"
        />
      </form>
    );
  }
}

export default compose(
  connect(),
  reduxForm({ form: "RegisterForm", validate: RegisterForm.validate }),
  withStyles(styles, { name: "RegisterForm" })
)(RegisterForm);
