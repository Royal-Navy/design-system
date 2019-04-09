import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import RnTransfer from '@/src/components/RnTransfer/index.vue'

describe('RnTransfer.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnTransfer, {
      propsData: {
        leftHeader: 'This is a test title',
        rightHeader: 'This is a test title',
        listData: [
          {
            "id": "stfaith",
            "location": 'St Faith', 
            "list" : 'left',
            "checked" : false,
          },
          {
            "id": "portsmouth",
            "location": 'Portsmouth', 
            "list" : 'right',
            "checked" : false,
          },
          {
            "id": "gosport",
            "location": 'Gosport', 
            "list" : 'left',
            "checked" : false,
          },
          {
            "id": "southampton",
            "location": 'Southampton', 
            "list" : 'left',
            "checked" : false,
          },
        ]
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
  it('Displays a left Header', () => {
    expect(wrapper.find('.column-left > h1').text()).toBe('This is a test title')
  })
  it('Displays a right Header', () => {
    expect(wrapper.find('.column-right > h1').text()).toBe('This is a test title')
  })
  it('Has 3 items in the left column', () => {
    expect(wrapper.find('.column-left > ul').findAll('li').length).toBe(3)
  })
  it('Has 1 item in the right column', () => {
    expect(wrapper.find('.column-right > ul').findAll('li').length).toBe(1)
  })
  it('Moves items from the right list to the left list', () => {
    wrapper.find('.column-right > ul > li > label > input[name="portsmouth"]').setChecked()
    wrapper.find('.transfer-buttons > .left').trigger('click')
    expect(wrapper.find('.column-left > ul').findAll('li').length).toBe(4)
  })
})


