const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'blue',
    padding: theme.spacing(0, 8)
  },
  menuItem: {
    width: 'unset',
    fontWeight: 700,
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },
  menuItemActive: {
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  homeIcon: {
    width: '1em',
    marginRight: theme.spacing(1)
  }
});

export default styles;
