import { axeTest } from '@storybook/addon-storyshots-puppeteer'
import initStoryshots from '@storybook/addon-storyshots'
import path from 'path'

const staticStorybookPath = path.join(__dirname, '../../.static_storybook')

initStoryshots({
  suite: 'A11y checks',
  test: axeTest({ storybookUrl: `file://${staticStorybookPath}` }),
})
