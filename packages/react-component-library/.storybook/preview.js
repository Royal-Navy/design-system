import '@royalnavy/css-framework/index.scss'
import '@royalnavy/fonts'
import { addDecorator } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance'

addDecorator(withPerformance)

export const parameters = {
  layout: 'fullscreen',
}
