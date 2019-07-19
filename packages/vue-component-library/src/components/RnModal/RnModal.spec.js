import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnModal from '@/src/components/RnModal/index.vue'

describe('RnModal.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnModal, {
      propsData: {
        title: 'This is a test title',
        actionButtonText: 'ok',
        hideCancel: false,
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
    expect(wrapper.props('hideCancel')).toBe(false)
    expect(wrapper.props('hideAction')).toBe(false)
    expect(wrapper.props('error')).toBe(false)
  })

  it('Displays a title', () => {
    expect(wrapper.find('.title').text()).toBe('This is a test title')
  })

  it('Displays an action button', () => {
    expect(wrapper.find('#action-button').text()).toBe('ok')
  })

  it('Displays a cancel button', () => {
    expect(wrapper.find('#cancel-button').text()).toBe('Cancel')
  })


})
