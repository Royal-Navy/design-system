import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnBadge from '@/src/components/RnBadge/index.vue'

describe('RnBadge.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnBadge, {
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
