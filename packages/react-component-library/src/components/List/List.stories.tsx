import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { List, ListItem } from '.'

export default {
  component: List,
  subcomponents: { ListItem },
  title: 'List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof List>

export const Default: ComponentStory<typeof List> = (props) => (
  <List {...props}>
    <ListItem onClick={action('onClick')} title="List item 1">
      This is the description for item 1
    </ListItem>
    <ListItem title="List item 2">This is the description for item 2</ListItem>
    <ListItem title="List item 3">This is the description for item 3</ListItem>
    <ListItem title="List item 4">This is the description for item 4</ListItem>
  </List>
)
