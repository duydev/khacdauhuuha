import React from 'react'
import { SEO } from '../components/Shared'
import { DefaultTheme } from '../components/Themes'
import { MaintainMode } from '../components/Utils'
import { DefaultLayout } from '../components/Layouts'

const IndexPage = () => (
  <DefaultTheme>
    <MaintainMode>
      <SEO title="Trang chủ" />
      <DefaultLayout>
        <h1>Hello World!</h1>
      </DefaultLayout>
    </MaintainMode>
  </DefaultTheme>
)

export default IndexPage
