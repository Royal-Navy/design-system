import Vue from 'vue/dist/vue.js'
import VueLib from '@royalnavy/vue-component-library'

const {
  Components: { RnToggle },
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
