import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import RnTable from './index.vue'

describe('RnTable.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RnTable, {
      propsData: {
        caption: 'Whoever heard of a snozzberry?',
        headings: ['Fruit Name', 'Quantity'],
        tableData: [
          ['Apple', 3],
          ['Banana', 7],
          ['Megafruit', 100],
          ['Snozzberry', 0],
        ],
      },
    })
  })

  it('renders the table caption when props passed', () => {
    expect(wrapper.html()).toContain('Whoever heard of a snozzberry?')
  })
  it('renders the table header when props passed', () => {
    expect(wrapper.html()).toContain('Fruit Name')
  })

  it('renders the table body when props passed', () => {
    expect(wrapper.html()).toContain('Megafruit')
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
