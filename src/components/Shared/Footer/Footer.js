import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import styles from './styles'

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <div id="copyright">
        <Grid container>
          <Grid item>
            © {new Date().getFullYear()} - Made with{' '}
            <span className={classes.heart} /> by{' '}
            <a href="https://duydev.me">Trần Nhật Duy</a>
          </Grid>
          <Grid item>Right content</Grid>
        </Grid>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
