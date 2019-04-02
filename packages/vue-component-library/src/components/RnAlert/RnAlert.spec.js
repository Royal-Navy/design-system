import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnAlert from '@/src/components/RnAlert/index.vue'

describe('RnAlert.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnAlert, {
      propsData: {
        title: 'This is a test title',
        actionButtonText: 'ok',
        hideClose: false,
        hideAction: false,
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
    expect(wrapper.props('actionButtonText')).toBe('ok')
    expect(wrapper.props('hideClose')).toBe(false)
    expect(wrapper.props('hideAction')).toBe(false)
    expect(wrapper.props('error')).toBe(false)
  })

  it('Displays a title', () => {
    expect(wrapper.find('.title').text()).toBe('This is a test title')
  })

  it('Displays an action button', () => {
    expect(wrapper.find('#action-button').text()).toBe('ok')
  })

  it('Displays a close button', () => {
    expect(wrapper.find('#close-button').isVisible()).toBe(true)
  })


})
