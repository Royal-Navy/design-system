---
title: Toggle
description: A switch like component with a true or false state, can be used in forms or standalone.
---

# Overview

A toggle is a simple component that acts like a switch, with a on or of state. When used in a HTML form a toggle stores its value using a hidden checkbox field.

## Usage

The toggle component can be used as a Vue/React component anywhere in a page or within an HTML form.

### HTML

When used in a regular web page the toggle component uses markup identical to a checkbox but with classes to indicate the component should be progressivey enhanced to appear like a toggle.

#### Example

![Toggle example](images/toggle.png)

```
<label class="rn-toggle" label-for="happy">
  <input
    class="rn-toggle__input"
    name="happy"
    type="checkbox"
    value="yes"
  />
  <span class="rn-toggle__label-inner">Toggle title</span>
</label>
```

### Vue JS

A Vue JS toggle can be used either in a form or on its own, maybe to control part of a page.

#### Properties

| Name       | Type                  | Required | Description                                                                                                |
| ---------- | --------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| name       | String                | False    | If provided this is used for the name attribute for the hidden checkbox field                              |
| label      | String                | True     | The label to be shown next to the toggle                                                                   |
| value      | String/Number/Boolean | False    | The current value                                                                                          |
| trueValue  | String/Number/Boolean | False    | The value to store and be associated with the on check state. If value === trueValue. **Default true**     |
| falseValue | String/Number/Boolean | False    | The value to store and be associated with the off check state. If value !== trueValue. **\*Default false** |
| v-model    | string                | False    | Shorthand for the name, value and change properties. This is the standard method used for Vue js forms     |

#### Events

| Name   | Description                                           |
| ------ | ----------------------------------------------------- |
| change | When value changes, passes the new value              |
| input  | When the user clicks component, passes the new value  |
| focus  | When the user clicks on or set focus on the component |
| blur   | When the user moves off the component                 |

#### Example

```
<rn-toggle label="Happy" v-model="happy" />

const Demo = {
  components: { RnToggle },
  methods: {
    change(newValue) {
      this.happy = newValue
      this.message = `Toggled`
    },
  },
  data() {
    return {
      happy: false,
      message: '',
    }
  },

  template: `
    <div>
      <rn-toggle
        label="Toggle me"
        :value="happy"
        v-on:change="change"
      />

      <hr>
      <p>{{message}}</p>
    </div>
  `,
}
```
