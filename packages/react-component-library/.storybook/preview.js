import '@royalnavy/css-framework/index.scss'
import '@royalnavy/fonts'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addParameters({
  layout: 'fullscreen',
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
