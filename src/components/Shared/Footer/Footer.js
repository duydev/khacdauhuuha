import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      © {new Date().getFullYear()} - Made with{' '}
      <span className={classes.heart} /> by{' '}
      <a href="https://duydev.me">Trần Nhật Duy</a>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
