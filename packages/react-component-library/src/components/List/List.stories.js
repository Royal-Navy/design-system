import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Badge from '../Badge'
import List from './index'
import ListItem from '../ListItem'

const stories = storiesOf('List', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <List>
    <ListItem>
      <span>List Item 1</span>
      <Badge type="pill">Badge</Badge>
    </ListItem>
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 1</ListItem>
  </List>
))
