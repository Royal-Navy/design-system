import { createRenderer } from 'vue-server-renderer'
import { shallow } from '@vue/test-utils'

import RnButton from '@/src/components/RnButton/index.vue'

describe('RnButton.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnButton, {
      propsData: {
        //
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
