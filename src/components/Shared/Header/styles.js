export default theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

    '& .logo-wrapper': {
      width: '100%',
      textAlign: 'center',
      paddingTop: '8px',
      boxShadow: '5px 10px 18px red',
    },

    '& .nav-wrapper': {
      background: theme.palette.primary.main,
      width: '100%',
      textAlign: 'center',
    },
  },
})
