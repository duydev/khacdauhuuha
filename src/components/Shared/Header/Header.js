import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import './Header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <CssBaseline />
    <AppBar color="primary" position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Khắc dấu Hữu Hạ
        </Typography>
      </Toolbar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
