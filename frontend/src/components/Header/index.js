import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles, Grid, I } from '@material-ui/core';
import styles from './styles';

const Header = ({ classes }) => (
  <Grid className={classes.root}>
    <Link href="/">
      <img
        className={classes.logo}
        src="/images/logo.png"
        alt="Khắc dấu Hữu Hạ"
      />
    </Link>
  </Grid>
);

export default withStyles(styles, { name: 'Header' })(Header);
