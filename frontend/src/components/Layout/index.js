import React from 'react';
import PropTypes from 'prop-types';
import { initGA, logPageView } from '../../utils/ga.utils';
import { withStyles, Paper } from '@material-ui/core';
import styles from './styles';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  componentDidMount() {
    initGA();
    logPageView();
  }

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.content}>{children}</div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'Layout' })(Layout);
