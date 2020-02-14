import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DefaultLayout from "../../components/Layouts/DefaultLayout";

class Layout extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: "default"
  };

  getLayoutComponent(name) {
    switch (name) {
      default:
        return DefaultLayout;
    }
  }

  render() {
    const { name, ...rest } = this.props;

    const Component = this.getLayoutComponent(name);

    return <Component {...rest} />;
  }
}

const mapStateToProps = state => ({
  name: state.app.pageLayout
});

export default connect(mapStateToProps)(Layout);
