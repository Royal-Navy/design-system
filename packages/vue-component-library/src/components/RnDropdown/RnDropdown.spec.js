import { shallowMount } from '@vue/test-utils'

import RnDropdown from '@/src/components/RnDropdown/index.vue'

describe('RnDropdown.vue', () => {
  let wrapper

  describe('label', () => {
    describe('when the dropdown is called with a label and no current value', () => {
      beforeEach(() => {
        wrapper = shallowMount(RnDropdown, {
          propsData: {
            label: 'Select option',
            options: [
              { value: '1', label: 'Jan' },
              { value: '2', label: 'Feb' },
            ],
          },
        })
      })

      it('should show the label prop in the dropdown', () => {
        const label = wrapper.find('.rn-dropdown__label')
        expect(label.text()).toContain('Select option')
      })
    })

    describe('when the dropdown is called with a label and a current value', () => {
      beforeEach(() => {
        wrapper = shallowMount(RnDropdown, {
          propsData: {
            label: 'Select Month',
            value: '1',
            options: [
              { value: '1', label: 'Jan' },
              { value: '2', label: 'Feb' },
            ],
          },
        })
      })

      it('should show the current value in the dropdown', () => {
        const label = wrapper.find('.rn-dropdown__label')
        expect(label.text()).toContain('Jan')
      })
    })

    describe('when the dropdown is called with no label and no current value', () => {
      beforeEach(() => {
        wrapper = shallowMount(RnDropdown, {
          propsData: {
            options: [
              { value: '1', label: 'Jan' },
              { value: '2', label: 'Feb' },
            ],
          },
        })
      })

      it('should show the first option in the drop down', () => {
        const label = wrapper.find('.rn-dropdown__label')
        expect(label.text()).toContain('Jan')
      })
    })

    describe('when the dropdown is called with no label and a current value', () => {
      beforeEach(() => {
        wrapper = shallowMount(RnDropdown, {
          propsData: {
            value: '1',
            options: [
              { value: '1', label: 'Jan' },
              { value: '2', label: 'Feb' },
            ],
          },
        })
      })

      it('should show the current value in the drop down', () => {
        const label = wrapper.find('.rn-dropdown__label')
        expect(label.text()).toContain('Jan')
      })
    })
  })

  describe('when the dropdown is created with options a label and a value', () => {
    beforeEach(() => {
      wrapper = shallowMount(RnDropdown, {
        propsData: {
          label: 'Select Month',
          options: [{ value: '1', label: 'Jan' }, { value: '2', label: 'Feb' }],
        },
      })
    })

    describe('and the user clicks on the dropdown', () => {
      beforeEach(() => {
        wrapper.find('.rn-dropdown__button').trigger('click')
      })

      it('should display the options', () => {
        const optionsWrapper = wrapper.find('.rn-dropdown__sheet')
        expect(optionsWrapper.isEmpty()).toBe(false)

        const options = wrapper.findAll('.rn-dropdown__option')
        expect(options).toHaveLength(2)
      })

      describe('when the user clicks on the field', () => {
        beforeEach(() => {
          wrapper.find('.rn-dropdown__button').trigger('click')
        })

        it('should hide the options', () => {
          const options = wrapper.findAll('.rn-dropdown__option')
          expect(options).toHaveLength(0)
        })

        it('should not emit a message to say it changed', () => {
          expect(wrapper.emitted().input).toBeFalsy()
        })
      })

      describe('when the user clicks on a value', () => {
        beforeEach(() => {
          const options = wrapper.findAll('.rn-dropdown__option')
          options.at(1).trigger('click')
        })

        it('should hide the options', () => {
          const optionsWrapper = wrapper.findAll('.rn-dropdown__sheet')
          expect(optionsWrapper).toHaveLength(0)
        })

        it('should emit a message to say it changed', () => {
          expect(wrapper.emitted().input.length).toEqual(1)
          expect(wrapper.emitted().input[0]).toEqual(['2'])
        })
      })
    })
  })

  describe('when the dropdown is created with options that have helpers', () => {
    beforeEach(() => {
      wrapper = shallowMount(RnDropdown, {
        propsData: {
          label: 'Select Month',
          options: [
            { value: '1', label: 'Jan', helper: 'Thing 1' },
            { value: '2', label: 'Feb', helper: 'Thing 2' },
          ],
        },
      })
    })

    describe('and the user clicks on the dropdown', () => {
      beforeEach(() => {
        wrapper.find('.rn-dropdown__button').trigger('click')
      })

      it('should display the options with the helper', () => {
        const optionsWrapper = wrapper.find('.rn-dropdown__sheet')
        expect(optionsWrapper.isEmpty()).toBe(false)

        const helpers = wrapper.findAll('.rn-dropdown__option__helper')
        expect(helpers).toHaveLength(2)

        expect(helpers.at(0).text()).toContain('Thing 1')
        expect(helpers.at(1).text()).toContain('Thing 2')
      })
    })
  })

  describe('when dropdown is created with links', () => {
    beforeEach(() => {
      wrapper = shallowMount(RnDropdown, {
        propsData: {
          options: [
            { href: '1', label: 'Link 1' },
            { href: '2', label: 'Link 2' },
          ],
        },
      })
    })

    it('should render a dropdown with a default label', () => {
      const label = wrapper.find('.rn-dropdown__label')
      expect(label.text()).toContain('Select option')
    })

    it('should hide the links', () => {
      const linkElements = wrapper.findAll(
        '.rn-dropdown__sheet .rn-dropdown__link'
      )
      expect(linkElements).toHaveLength(0)
    })

    describe('and the user clicks on the dropdown', () => {
      beforeEach(() => {
        wrapper.find('.rn-dropdown__button').trigger('click')
      })

      it('should render a list of links', () => {
        const linkElements = wrapper.findAll(
          '.rn-dropdown__sheet .rn-dropdown__link'
        )
        expect(linkElements).toHaveLength(2)
      })
    })
  })

  describe('when dropdown is created with links and a label', () => {
    beforeEach(() => {
      wrapper = shallowMount(RnDropdown, {
        propsData: {
          label: 'Pick site',
          options: [
            { href: '1', label: 'Link 1' },
            { href: '2', label: 'Link 2' },
          ],
        },
      })
    })

    it('should render a dropdown with the given label', () => {
      const label = wrapper.find('.rn-dropdown__label')
      expect(label.text()).toContain('Pick site')
    })
  })
})
