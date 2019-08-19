export default {
  root: {
    '& a': {
      '& button': {
        color: 'white',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '&.active': {
        '& button': {
          textDecoration: 'underline',
        },
      },
    },
  },
}
