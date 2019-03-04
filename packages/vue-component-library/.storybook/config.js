import { configure } from '@storybook/vue'
import Vue from 'vue'
import SvgIcon from 'vue-svgicon'

import '@royalnavy/css-framework/index.scss'

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon',
})

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
