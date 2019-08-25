import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Icon, IconButton, withStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import styles from './styles'

class MainNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navClasses: this.props.classes.root,
    }
  }

  showMobileMenu = () => {
    this.setState({
      navClasses: this.props.classes.mobileRoot,
    })
  }

  closeMobileMenu = () => {
    this.setState({
      navClasses: this.props.classes.root,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.btnMenu}
          onClick={this.showMobileMenu}
        >
          <MenuIcon />
        </IconButton>
        <nav className={this.state.navClasses}>
          <Link
            to="/"
            activeClassName="active"
            className="icon"
            onClick={this.closeMobileMenu}
          >
            <Icon>home</Icon>Trang chủ
          </Link>
          <Link
            to="/about"
            activeClassName="active"
            onClick={this.closeMobileMenu}
          >
            Về chúng tôi
          </Link>
          <Link
            to="/about"
            activeClassName="active"
            onClick={this.closeMobileMenu}
          >
            Liên hệ
          </Link>
          <IconButton
            color="inherit"
            aria-label="close menu"
            className={classes.btnMenu}
            onClick={this.closeMobileMenu}
          >
            <CloseIcon />
          </IconButton>
        </nav>
      </>
    )
  }
}

MainNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainNav)
