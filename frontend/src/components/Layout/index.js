import React from 'react';
import PropTypes from 'prop-types';
import { initGA, logPageView } from '../../utils/ga.utils';
import { withStyles, Paper } from '@material-ui/core';
import styles from './styles';

console.log(styles);

class Layout extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  componentDidMount() {
    initGA();
    logPageView();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper>{this.props.children}</Paper>
      </div>
    );
  }
}

export default withStyles(styles, { name: 'Layout' })(Layout);
