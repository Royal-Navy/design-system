import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { List, ListProps, ListItem } from '.'

export default {
  component: List,
  subcomponents: { ListItem },
  title: 'List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<ListProps> = (props) => (
  <List {...props}>
    <ListItem onClick={action('onClick')} title="List item 1">
      This is the description for item 1
    </ListItem>
    <ListItem title="List item 2">This is the description for item 2</ListItem>
    <ListItem title="List item 3">This is the description for item 3</ListItem>
    <ListItem title="List item 4">This is the description for item 4</ListItem>
  </List>
)
