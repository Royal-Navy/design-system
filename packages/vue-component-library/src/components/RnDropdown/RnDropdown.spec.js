import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import RnDropdown from '@/src/components/RnDropdown/index.vue'

describe('RnDropdown.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnDropdown, {
      propsData: {
        count: '2',
        options: [{ value: '1', label: 'One' }, { value: '2', label: 'Two' }],
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
