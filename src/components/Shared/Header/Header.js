import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, AppBar, Toolbar, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import MainNav from '../MainNav/MainNav'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './styles'

const Header = ({ classes }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <AppBar color="primary" position="relative">
        <Toolbar gutters={false}>
          <Container className={classes.containerWrapper}>
            <Link className={classes.logoWrapper} to="/">
              <Img fixed={data.logo.childImageSharp.fixed} />
            </Link>
            <MainNav />
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
