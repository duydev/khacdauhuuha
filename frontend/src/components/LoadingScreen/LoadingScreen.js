import React from "react";
import PropTypes from "prop-types";

import { withStyles, Backdrop, CircularProgress } from "@material-ui/core";

import styles from "./styles";

class LoadingScreen extends React.Component {
  static propTypes = { open: PropTypes.bool.isRequired };

  render() {
    const { classes, open } = this.props;

    return (
      <Backdrop className={classes.root} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
}

export default withStyles(styles, { name: "LoadingScreen" })(LoadingScreen);
