import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, List, ListItem } from '@material-ui/core';
import styles from './styles';
import Link from 'next/link';
import { withRouter } from 'next/router';

const MainMenu = ({ classes, router: { pathname } }) => {
  const pages = [
    { path: '/', title: 'Trang Chủ' },
    { path: '/demo', title: 'Page Demo' }
  ];

  return (
    <List className={classes.root}>
      {pages.map(({ path, title }) => (
        <Link key={path} href={path}>
          <ListItem
            className={classes.menuItem}
            button
            selected={pathname === path}
          >
            {title}
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles, { name: 'MainMenu' })(MainMenu));
