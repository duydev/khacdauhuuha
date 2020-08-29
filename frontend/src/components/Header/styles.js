const styles = theme => ({
  logo: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  logoImage: {
    height: '60px',
    cursor: 'pointer'
  },
  [theme.breakpoints.up('md')]: {
    root: {},
    logo: {
      textAlign: 'unset',
      padding: theme.spacing(1),
      margin: theme.spacing(0, 16)
    }
  }
});

export default styles;
