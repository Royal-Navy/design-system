import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { List, ListItem } from '.'

const stories = storiesOf('List', module)

stories.add('Default', () => {
  return (
    <List>
      <ListItem onClick={action('Clicked 1')} title="List item 1">
        This is the description for item 1
      </ListItem>
      <ListItem onClick={action('Clicked 2')} title="List item 2">
        This is the description for item 2
      </ListItem>
      <ListItem onClick={action('Clicked 3')} title="List item 3">
        This is the description for item 3
      </ListItem>
      <ListItem onClick={action('Clicked 4')} title="List item 4">
        This is the description for item 4
      </ListItem>
    </List>
  )
})
