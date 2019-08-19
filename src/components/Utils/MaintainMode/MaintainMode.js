import React from 'react'
import PropTypes from 'prop-types'
import { MaintainPage } from '../../Pages'

const MaintainMode = ({ children }) => {
  const isMaintainMode = process.env.GATSBY_MAINTAIN_MODE === 'true'

  if (!isMaintainMode) return children

  return <MaintainPage />
}

MaintainMode.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MaintainMode
