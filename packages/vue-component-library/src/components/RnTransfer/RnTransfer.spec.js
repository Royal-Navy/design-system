import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnTransfer from '@/src/components/RnTransfer/index.vue'

describe('RnTransfer.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnTransfer, {
      propsData: {
        title: 'This is a test title',
        error: false
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

  it('Has expected props', () => {
    expect(wrapper.props('title')).toBe('This is a test title')
    expect(wrapper.props('actionButtonText')).toBe('OK')
    expect(wrapper.props('hideClose')).toBe(false)
    expect(wrapper.props('hideAction')).toBe(false)
    expect(wrapper.props('error')).toBe(false)
  })

})


