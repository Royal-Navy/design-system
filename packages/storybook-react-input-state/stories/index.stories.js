import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from './Input'
import State from '../src/State'

const stories = storiesOf('Input', module)

stories.add('Text', () => (
  <form>
    <State>
      <Input name="user" label="User" type="text" value="fred" />
      <Input name="colour" label="Colour" type="text" value="" />
    </State>
  </form>
))
