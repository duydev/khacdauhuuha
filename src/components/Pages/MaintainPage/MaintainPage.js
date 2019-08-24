import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  Paper,
  Typography,
  Box,
  Container,
  withStyles,
} from '@material-ui/core'

import { RootLayout } from '../../Layouts'

import styles from './styles'

const MaintainPage = ({ classes, data }) => (
  <RootLayout>
    <Helmet
      htmlAttributes={data.htmlAttributes}
      title={data.title}
      titleTemplate={data.titleTemplate}
      meta={data.meta}
    />
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
      <footer>
        © {new Date().getFullYear()} - Made with <span className="heart" /> by{' '}
        <a href="https://duydev.me">Trần Nhật Duy</a>
      </footer>
    </Container>
  </RootLayout>
)

MaintainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
}

MaintainPage.defaultProps = {
  data: {
    htmlAttributes: { lang: 'vi' },
    title: 'Bảo trì',
    titleTemplate: '%s | Khắc dấu Hữu Hạ - Mỹ Tho - Tiền Giang',
    meta: [
      {
        name: `description`,
        content: `Dịch vụ khắc dấu chuyên nghiệp. Chuyên bán các sản phẩm về dấu và các sản phẩm trang trí văn phòng, hội trường.`,
      },
    ],
  },
}

export default withStyles(styles)(MaintainPage)
