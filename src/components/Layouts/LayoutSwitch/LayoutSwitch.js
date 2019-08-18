import React from 'react'
import PropTypes from 'prop-types'
import { Maintain } from '../../Pages'
import Layout from '../Layout/Layout'
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
    return (
      <>
        <SEO lang="vi" title={this.state.title} />
        {this.state.isMaintain ? (
          <Maintain />
        ) : (
          <Layout>{this.props.children}</Layout>
        )}
      </>
    )
  }
}

LayoutSwitch.propTypes = {
  title: PropTypes.string.isRequired,
}

export default LayoutSwitch
