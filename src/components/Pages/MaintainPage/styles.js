export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '15px 0 0',
    '& .MuiPaper-root': {
      padding: '15px',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '95%',
      },
      '& .MuiTypography-root': {
        margin: 0,
      },
      '& .MuiTypography-h4': {
        padding: '0 0 5px 0',
        [theme.breakpoints.down('xs')]: {
          padding: '0 0 5px 0',
          fontSize: '1.45rem',
        },
      },
      '& .MuiTypography-h5': {
        padding: '0 0 10px 0',
        [theme.breakpoints.down('xs')]: {
          padding: '0 0 10px 0',
          fontSize: '1.15rem',
        },
      },
      '& .MuiBox-root': {
        textAlign: 'center',
        '& img': {
          width: '100%',
        },
      },
    },
    '& footer': {
      paddingTop: '10px',
      textAlign: 'center',
      '& a': {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: 'blue',
        '&:hover': {
          color: 'red',
        },
      },
    },
  },
})
