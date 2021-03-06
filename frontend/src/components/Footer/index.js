import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles';

const Footer = ({ classes }) => (
  <Grid className={classes.root}>
    <p>
      &copy; {new Date().getFullYear()} - <strong>Khắc dấu Hữu Hạ</strong>.
    </p>
    <p>
      Made with <FavoriteIcon className={classes.heart} /> by{' '}
      <a className={classes.link} href="https://duydev.me">
        Trần Nhật Duy
      </a>
      .
    </p>
  </Grid>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'Footer' })(Footer);
