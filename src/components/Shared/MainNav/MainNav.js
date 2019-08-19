import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

const MainNav = ({ classes }) => (
  <nav className={classes.root}>
    <Link to="/" activeClassName="active">
      <Button>Trang chủ</Button>
    </Link>
    <Link to="/about" activeClassName="active">
      <Button>Về chúng tôi</Button>
    </Link>
    <Link to="/about" activeClassName="active">
      <Button>Liên hệ</Button>
    </Link>
  </nav>
)

MainNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainNav)
