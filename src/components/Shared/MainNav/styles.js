export default theme => ({
  root: {
    display: 'inline-block',

    '& a': {
      textDecoration: 'none',
      padding: theme.spacing(1),
      color: theme.palette.secondary.main,
      fontSize: '15px',
      fontWeight: 600,
      marginLeft: theme.spacing(1),

      '&:hover, &.active': {
        color: theme.palette.primary.main,
      },

      '&.icon': {
        position: 'relative',
        paddingLeft: '25px',

        '& span': {
          position: 'absolute',
          left: 0,
          top: '4px',
        },
      },
    },

    [theme.breakpoints.down('xs')]: {
      '&': {
        display: 'none',
      },
    },
  },
  btnMenu: {
    display: 'none',

    [theme.breakpoints.down('xs')]: {
      '&': {
        display: 'inherit',
      },
    },
  },
  mobileRoot: {
    backgroundColor: '#ffffffc7',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      padding: theme.spacing(1),
      color: theme.palette.secondary.main,
      fontSize: '1.5em',
      fontWeight: 600,
      maxWidth: '50%',

      '&:hover, &.active': {
        color: theme.palette.primary.main,
      },

      '&.icon': {
        position: 'relative',
        paddingLeft: '27px',

        '& span': {
          position: 'absolute',
          left: 0,
          top: '10px',
        },
      },
    },
  },
  btnCloseMenu: {
    display: 'none',

    [theme.breakpoints.down('xs')]: {
      '&': {
        display: 'inherit',
      },
    },
  },
})
