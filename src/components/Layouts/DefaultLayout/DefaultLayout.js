import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { CssBaseline, Container, Paper, withStyles } from '@material-ui/core'
import { Header, Footer } from '../../Shared'
import styles from './styles'

const DefaultLayout = ({ children, classes }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container component="main" className={classes.mainContent}>
        <Paper>{children}</Paper>
      </Container>
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(DefaultLayout)
