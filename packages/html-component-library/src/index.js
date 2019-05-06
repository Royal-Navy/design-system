import Vue from 'vue/dist/vue.js'
import VueLib from '@royalnavy/vue-component-library'

const {
  Components: { RnDropdown, RnToggle },
} = VueLib

const toggles = Array.from(document.querySelectorAll('.rn-toggle'))

toggles.forEach(element => {
  // Get the name and the current
  const input = element.querySelector('input')
  const value = input.value
  const name = input.getAttribute('name')
  const label = element.querySelector('.rn-toggle__label-inner').textContent

  new Vue({
    components: { RnToggle },
    data: function() {
      const data = {}
      data[name] = value
      return data
    },
    template: `<RnToggle label="${label}" v-model="${name}"/>`,
    el: element,
  })
})

const dropDowns = Array.from(document.querySelectorAll('.rn-dropdown'))

dropDowns.forEach(element => {
  const links = Array.from(element.querySelectorAll('.rn-dropdown__link'))
  const options = links.map(link => ({
    label: link.textContent,
    href: link.getAttribute('href'),
  }))
  const labelElement = element.querySelector('.rn-dropdown__label')
  const label = labelElement ? labelElement.textContent : 'Select option'

  new Vue({
    components: { RnDropdown },
    data: function() {
      return {
        label,
        options,
      }
    },
    template: '<RnDropdown :label="label" :options="options"/>',
    el: element,
  })
})
