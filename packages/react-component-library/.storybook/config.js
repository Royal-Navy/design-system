import { withInfo } from '@storybook/addon-info'
import { addDecorator, configure } from '@storybook/react'

import '@royalnavy/css-framework/index.scss'

addDecorator(withInfo)

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
