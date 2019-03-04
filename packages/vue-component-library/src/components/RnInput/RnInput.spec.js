import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnInput from '@/src/components/RnInput/index.vue'

describe('RnInput.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnInput, {
      propsData: {
        user: 'Fred',
        type: 'text',
        label: 'My Label',
        name: 'user',
        id: '1234',
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
