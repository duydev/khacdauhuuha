import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
})

const DefaultTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

DefaultTheme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultTheme
