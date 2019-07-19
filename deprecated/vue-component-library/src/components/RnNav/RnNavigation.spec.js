import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import RnNavigation from '@/src/components/RnNav/index.vue'

describe('RnNavigation.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnNavigation, {
      propsData: {
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
      },
    })
  })

  it('snapshot: has same HTML structure', () => {
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error(err)
      }

      expect(str).toMatchSnapshot()
    })
  })
})
