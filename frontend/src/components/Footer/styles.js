const styles = theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: theme.spacing(1, 0)
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
  }
});

export default styles;
