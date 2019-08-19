export default {
  root: {
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
  heart: {
    '&::before': {
      content: `'❤'`,
      color: 'red',
      fontSize: '1.5em',
      fontWeight: 700,
    },
  },
}
