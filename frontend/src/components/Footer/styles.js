const styles = theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: theme.spacing(1, 0),
    '& p': {
      margin: 0,
      lineHeight: '2em'
    }
  },
  heart: {
    color: 'red',
    fontSize: '1em'
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      textShadow: '2px 2px 2px #cc0000'
    }
  },
  [theme.breakpoints.up('md')]: {
    root: {
      '& p': {
        display: 'inline-block',
        marginRight: '5px'
      }
    }
  }
});

export default styles;
