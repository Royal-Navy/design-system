import { storiesOf } from '@storybook/vue'

import RnNav from './index.vue'

storiesOf('Nav', module)
  .add('horizontal', () => ({
    components: { RnNav },
    data() {
      return {
        navItems: [
          {
            url: 'http://testurl.test',
            label: 'Home',
          },
          {
            url: 'http://testurl.test',
            label: 'Link 1',
          },
          {
            url: 'http://testurl.test',
            label: 'Link 2',
          },
          {
            url: 'http://testurl.test',
            label: 'Link 3',
          },
        ],
      }
    },
    template: '<rn-nav orientation="horizontal" :navItems="navItems"/>',
  }))
  .add('vertical', () => ({
    components: { RnNav },
    data() {
      return {
        navItems: [
          {
            url: 'http://testurl.test',
            label: 'Home',
          },
          {
            url: 'http://testurl.test',
            label: 'Link 1',
          },
          {
            url: 'http://testurl.test',
            label: 'Link 2',
          },
          {
            url: 'http://testurl.test',
            label: 'Link 3',
          },
        ],
      }
    },
    template:
      '<rn-nav alignment="stretch" orientation="vertical" :navItems="navItems"/>',
  }))
