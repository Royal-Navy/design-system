import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import RnAvatar from '@/src/components/RnAvatar/index.vue'

describe('RnAvatar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnAvatar, {
      propsData: {
        initials: 'zt',
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
