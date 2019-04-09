import { shallowMount } from '@vue/test-utils'

import RnToggle from '@/src/components/RnToggle/index.vue'

describe.only('RnToggle.vue', () => {
  let wrapper

  describe('when the component is called with a value indicating false', () => {
    beforeEach(() => {
      wrapper = shallowMount(RnToggle, {
        propsData: {
          name: 'happy',
          label: 'Are you happy?',
          value: false,
        },
      })
    })

    it('should display a label', () => {
      const label = wrapper.find('.rn-toggle .rn-toggle__label-inner')
      expect(label.text()).toContain('Are you happy?')
    })

    it('should indicate the current value is false', () => {
      const control = wrapper.findAll('.rn-toggle.not-checked')
      expect(control).toHaveLength(1)
    })

    it('should include a hidden field to store the form value', () => {
      const input = wrapper.findAll('input[name="happy"]')
      expect(input).toHaveLength(1)
    })

    it('should indicate in the hidden field that it is unchecked', () => {
      const input = wrapper.find('input[name="happy"]')
      expect(input.element.checked).toEqual(false)
    })

    describe('when the user clicks on the component', () => {
      beforeEach(() => {
        wrapper.trigger('click')
      })

      it('should indicate that the value is now true', () => {
        const control = wrapper.findAll('.rn-toggle.is-checked')
        expect(control).toHaveLength(1)
      })

      it('should update the hidden field', () => {
        const input = wrapper.find('input[name="happy"]')
        expect(input.element.checked).toEqual(true)
      })

      it('should emit a change event', () => {
        expect(wrapper.emitted('change')[0]).toEqual([true])
      })

      it('should emit a input event', () => {
        expect(wrapper.emitted('input')[0]).toEqual([true])
      })
    })
  })

  describe('when the component is called with a value indicating true', () => {
    beforeEach(() => {
      wrapper = shallowMount(RnToggle, {
        propsData: {
          name: 'happy',
          label: 'Are you happy?',
          value: true,
        },
      })
    })

    it('should indicate the current value is true', () => {
      const control = wrapper.findAll('.rn-toggle.is-checked')
      expect(control).toHaveLength(1)
    })

    it('should indicate in the hidden field that it is checked', () => {
      const input = wrapper.find('input[name="happy"]')
      expect(input.element.checked).toEqual(true)
    })

    describe('when the user clicks on the component', () => {
      beforeEach(() => {
        wrapper.trigger('click')
      })

      it('should indicate that the value is now false', () => {
        const control = wrapper.findAll('.rn-toggle.not-checked')
        expect(control).toHaveLength(1)
      })

      it('should update the hidden field', () => {
        const input = wrapper.find('input[name="happy"]')
        expect(input.element.checked).toEqual(false)
      })

      it('should emit a change event', () => {
        expect(wrapper.emitted('change')[0]).toEqual([false])
      })

      it('should emit a input event', () => {
        expect(wrapper.emitted('input')[0]).toEqual([false])
      })
    })
  })
})
