const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh'
  },
  content: {
    flex: 1,
    padding: theme.spacing(0, 1)
  },
  [theme.breakpoints.up('md')]: {
    content: {
      padding: theme.spacing(0, 8)
    }
  }
});

export default styles;
