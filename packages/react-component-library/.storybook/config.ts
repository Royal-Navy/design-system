import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import '@royalnavy/css-framework/index.scss'
import '@royalnavy/fonts'

const req = require.context('../src', true, /\.stories\.tsx$/)

addDecorator(withA11y)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
