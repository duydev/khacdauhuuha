import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './src/themes'
import './src/styles/global.scss'
import { MaintainMode } from './src/components/Utils'
import { DefaultLayout } from './src/components/Layouts'

export const wrapRootElement = ({ element }) => {
  return <MuiThemeProvider theme={theme}>{element}</MuiThemeProvider>
}

export const wrapPageElement = ({ element }) => {
  return (
    <MaintainMode>
      <DefaultLayout>{element}</DefaultLayout>
    </MaintainMode>
  )
}
