import React from 'react'
import PropTypes from 'prop-types'

import { Container, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import styles from './styles'

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <Container>
        <div id="copyright">
          <Grid container>
            <Grid item container md={6} sm={6} xs={12} alignItems={'center'}>
              © {new Date().getFullYear()} - Khắc dấu Hữu Hạ.
            </Grid>
            <Grid
              item
              container
              md={6}
              sm={6}
              xs={12}
              justify={'flex-end'}
              alignItems={'center'}
            >
              Made with <span className="heart" /> by{' '}
              <a href="https://duydev.me">Trần Nhật Duy</a>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
