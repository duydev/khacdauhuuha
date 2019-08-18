import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../Layout/Layout'
import Maintain from '../Maintain/Maintain'

class LayoutSwitch extends React.Component {
  constructor(props) {
    super(props)

    this.setState({
      isMaintain: false,
    })
  }

  componentWillMount() {
    this.setState({
      isMaintain: process.env.GATSBY_MAINTAIN_MODE === 'true',
    })
  }

  renderLayout(isMaintain = false) {
    if (isMaintain) return <Maintain />

    return <Layout>{this.props.children}</Layout>
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta name="author" content={data.site.siteMetadata.author} />
            </Helmet>
            {this.renderLayout(this.state.isMaintain)}
          </>
        )}
      />
    )
  }
}

LayoutSwitch.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default LayoutSwitch
