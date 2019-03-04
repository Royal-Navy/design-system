import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnProgress from '@/src/components/RnProgress/index.vue'

describe('RnProgress.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnProgress, {
      propsData: {
        value: 50,
      },
    })
  })

  it.skip('snapshot: has same HTML structure', () => {
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error(err)
      }

      expect(str).toMatchSnapshot()
    })
  })
})
