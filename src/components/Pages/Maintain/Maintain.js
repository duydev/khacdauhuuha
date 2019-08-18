import React from 'react'
import { CssBaseline, Paper, Typography, Box } from '@material-ui/core'
import './Maintain.scss'

const Maintain = () => (
  <main>
    <CssBaseline />
    <Paper id="maintain">
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
      <Box className="image">
        <img
          src="https://media.giphy.com/media/3o7abDnUPDkOC05QU8/giphy.gif"
          alt="The worker working."
        />
      </Box>
    </Paper>
  </main>
)

export default Maintain
