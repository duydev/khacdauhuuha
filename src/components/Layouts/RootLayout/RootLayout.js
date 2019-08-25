import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, withStyles } from '@material-ui/core'
import styles from './styles'

const RootLayout = ({ children }) => (
  <>
    <CssBaseline />
    {children}
  </>
)

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(RootLayout)
