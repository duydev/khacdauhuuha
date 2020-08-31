import Head from 'next/head';
import withLayout from '../utils/withLayout';
import Layout from '../components/Layout';
import { withStyles, Grid } from '@material-ui/core';
import { FacebookProvider, Page } from 'react-facebook';

const styles = theme => ({
  root: {
    padding: theme.spacing(1, 0)
  },
  img: {
    width: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      padding: theme.spacing(3, 0)
    },
    mainContent: {
      padding: theme.spacing(0, 1)
    },
    sidebar: {
      padding: theme.spacing(0, 1)
    }
  },
  [theme.breakpoints.only('xs')]: {
    sidebar: {
      padding: theme.spacing(1, 1)
    }
  }
});

const HomePage = ({ classes }) => (
  <Grid container className={classes.root}>
    <Grid item xs={12} sm={9} className={classes.mainContent}>
      <img
        className={classes.img}
        src="/images/business-card.jpg"
        alt="Business card"
      />
    </Grid>
    <Grid item xs={12} sm={3} className={classes.sidebar}>
      <FacebookProvider appId="338926040644433">
        <Page href="https://facebook.com/khacdauhuuha" tabs="timeline" />
      </FacebookProvider>
    </Grid>
  </Grid>
);

export default withLayout(
  Layout,
  withStyles(styles, { name: 'HomePage' })(HomePage)
);
