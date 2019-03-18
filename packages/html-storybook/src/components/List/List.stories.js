import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('List', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <ul class="rn-list">
    <li class="rn-list__item null">
      <span>List Item 1</span>
      <span class="rn-badge--pill neutral regular ">Badge</span>
    </li>
    <li class="rn-list__item null">List Item 1</li>
    <li class="rn-list__item null">List Item 1</li>
    <li class="rn-list__item null">List Item 1</li>
  </ul>
))
