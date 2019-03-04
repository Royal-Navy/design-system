import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnModal from '@/src/components/RnModal/index.vue'

describe('RnModal.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnModal, {
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
