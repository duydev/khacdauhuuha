import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withStyles, Button } from "@material-ui/core";

import FormHelper from "../../helpers/form";
import { register } from "../../redux/register-form/actions";
import LoadingScreen from "../../components/LoadingScreen";

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
    this.props.register(values);
  };

  render() {
    const { classes, handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <React.Fragment>
        <LoadingScreen open={loading} />
        <form
          className={classes.root}
          onSubmit={handleSubmit(this.handleSubmit)}
        >
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
          <Button
            color="primary"
            variant="outlined"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.registerForm
});

const mapDispatchToProps = {
  register
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "RegisterForm", validate: RegisterForm.validate }),
  withStyles(styles, { name: "RegisterForm" })
)(RegisterForm);
