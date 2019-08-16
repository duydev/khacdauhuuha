import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
    </Helmet>
    <h1>Website đang được xây dựng.</h1>
    <h3>Vui lòng truy cập lại sau.</h3>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
