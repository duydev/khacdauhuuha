import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../Layout/Layout'
import Maintain from '../Maintain/Maintain'

class LayoutSwitch extends React.Component {
  state = {
    isMaintain: process.env.GATSBY_MAINTAIN_MODE === 'true',
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

export default LayoutSwitch
