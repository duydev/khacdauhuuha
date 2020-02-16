import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { changePageTitle } from "../../redux/app/actions";

import DefaultLayout from "../../components/Layouts/DefaultLayout";

class Layout extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    pageTitle: PropTypes.string,
    changePageTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
    name: "default"
  };

  componentDidMount() {
    const { pageTitle, changePageTitle } = this.props;

    if (pageTitle) {
      changePageTitle(pageTitle);
    }
  }

  getLayoutComponent(name) {
    switch (name) {
      default:
        return DefaultLayout;
    }
  }

  render() {
    const { name, changePageTitle, ...rest } = this.props;

    const Component = this.getLayoutComponent(name);

    return <Component {...rest} />;
  }
}

const mapStateToProps = state => ({
  name: state.app.pageLayout
});

const mapDispatchToProps = {
  changePageTitle
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
