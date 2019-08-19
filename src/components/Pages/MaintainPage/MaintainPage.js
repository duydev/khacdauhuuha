import React from 'react'
import { Paper, Typography, Box, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { Footer } from '../../Shared'
import { EmptyLayout } from '../../Layouts'
import { SEO } from '../../Shared'
import styles from './styles'

const MaintainPage = ({ classes }) => (
  <EmptyLayout>
    <SEO title="Bảo trì" />
    <Container component="main" className={classes.root} fixed>
      <Paper>
        <Typography variant="h4" align="center" color="primary" noWrap>
          Website đang được xây dựng
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          gutterBottom
          noWrap
        >
          Vui lòng truy cập lại sau.
        </Typography>
        <Box>
          <img
            src="https://media.giphy.com/media/3o7abDnUPDkOC05QU8/giphy.gif"
            alt="The worker working."
          />
        </Box>
      </Paper>
      <Footer />
    </Container>
  </EmptyLayout>
)

export default withStyles(styles)(MaintainPage)
