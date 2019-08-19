import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline } from '@material-ui/core'

const EmptyLayout = ({ children }) => (
  <>
    <CssBaseline />
    {children}
  </>
)

EmptyLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EmptyLayout
