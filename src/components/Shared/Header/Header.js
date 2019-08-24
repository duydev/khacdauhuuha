import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, AppBar } from '@material-ui/core'
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
          fixed(height: 47) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AppBar className={classes.root} color="default">
      <Container>
        <Grid container>
          <Grid item container md={6} sm={6} xs={6} alignItems={'center'}>
            <Link to="/">
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt="Logo khắc dấu Hữu Hạ"
              />
            </Link>
          </Grid>
          <Grid
            item
            container
            md={6}
            sm={6}
            xs={6}
            alignItems={'center'}
            justify={'flex-end'}
          >
            <MainNav />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
