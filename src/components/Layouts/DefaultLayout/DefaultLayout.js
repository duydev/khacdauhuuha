import React from 'react'
import PropTypes from 'prop-types'
import { Container, withStyles } from '@material-ui/core'
import { Header, Footer } from '../../Shared'
import { RootLayout } from '../'
import styles from './styles'

const DefaultLayout = ({ children, classes }) => {
  return (
    <RootLayout>
      <Header />
      <Container component="main" className={classes.root}>
        {children}
      </Container>
      <Footer />
    </RootLayout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DefaultLayout)
