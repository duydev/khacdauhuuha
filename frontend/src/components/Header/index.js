import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles, Grid, I } from '@material-ui/core';
import styles from './styles';
import MainMenu from '../MainMenu';

const Header = ({ classes }) => (
  <Grid className={classes.root}>
    <Grid className={classes.logo}>
      <Link href="/">
        <img
          className={classes.logoImage}
          src="/images/logo.png"
          alt="Khắc dấu Hữu Hạ"
        />
      </Link>
    </Grid>
    <MainMenu />
  </Grid>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'Header' })(Header);
