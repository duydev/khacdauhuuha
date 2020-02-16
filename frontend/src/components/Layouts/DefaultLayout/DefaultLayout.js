import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

import styles from "./styles";

class DefaultLayout extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    const { classes, children } = this.props;

    return <div className={classes.root} children={children} />;
  }
}

export default withStyles(styles, { name: "DefaultLayout" })(DefaultLayout);
