const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'blue',
    padding: theme.spacing(0, 3)
  },
  menuItem: {
    width: 'unset',
    fontWeight: 700,
    color: '#fff'
  },
  homeIcon: {
    width: '1em',
    marginRight: theme.spacing(1)
  }
});

export default styles;
