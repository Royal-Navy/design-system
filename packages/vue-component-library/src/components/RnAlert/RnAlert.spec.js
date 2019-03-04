import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnAlert from '@/src/components/RnAlert/index.vue'

describe('RnAlert.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnAlert, {
      propsData: {
        text: 'foo',
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
