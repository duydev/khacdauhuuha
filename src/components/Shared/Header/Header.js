import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
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
          fixed(height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className={classes.root}>
      <Paper className="logo-wrapper" square>
        <Link className={classes.logoWrapper} to="/">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>
      </Paper>
      <Paper className="nav-wrapper" square>
        <MainNav />
      </Paper>
    </header>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
