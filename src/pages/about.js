import React from 'react'
import { SEO } from '../components/Shared'
import { DefaultTheme } from '../components/Themes'
import { MaintainMode } from '../components/Utils'
import { DefaultLayout } from '../components/Layouts'

const AboutPage = () => (
  <DefaultTheme>
    <MaintainMode>
      <SEO title="Về chúng tôi" />
      <DefaultLayout>
        <h1>This is about page.</h1>
      </DefaultLayout>
    </MaintainMode>
  </DefaultTheme>
)

export default AboutPage
