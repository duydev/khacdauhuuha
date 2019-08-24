export default theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 0),
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    '& .heart, & a': {
      margin: theme.spacing(0, 1),
    },

    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',

      '&:hover': {
        borderBottom: '1px solid #666',
      },
    },

    [theme.breakpoints.down('xs')]: {
      '& .MuiGrid-item': {
        justifyContent: 'center',
      },
    },
  },
})
