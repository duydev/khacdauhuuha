export default {
  root: {
    '& a': {
      '& button': {
        color: 'white',
        paddingLeft: '16px',
        paddingRight: '16px',

        '&:hover': {
          textDecoration: 'underline',
        },

        '& .MuiIcon-root': {
          fontSize: '1.2rem',
        },
      },
      '&.active': {
        '& button': {
          background: 'rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
}
