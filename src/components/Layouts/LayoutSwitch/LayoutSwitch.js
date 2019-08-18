import React from 'react'
import PropTypes from 'prop-types'

import { SEO } from '../../Shared'

class LayoutSwitch extends React.Component {
  constructor(props) {
    super(props)

    const isMaintain = process.env.GATSBY_MAINTAIN_MODE === 'true'
    const title = isMaintain ? 'Bảo trì' : this.props.title

    this.state = {
      isMaintain,
      title,
    }
  }

  render() {
    let content = null
    if (this.state.isMaintain) {
      const Maintain = require('../../Pages').Maintain
      content = <Maintain />
    } else {
      const Layout = require('../Layout/Layout').default
      content = <Layout>{this.props.children}</Layout>
    }

    return (
      <>
        <SEO lang="vi" title={this.state.title} />
        {content}
      </>
    )
  }
}

LayoutSwitch.propTypes = {
  title: PropTypes.string.isRequired,
}

export default LayoutSwitch
