import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { List, ListItem } from '.'

export default {
  component: List,
  subcomponents: { ListItem },
  title: 'Components/List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof List>

export const Default: StoryFn<typeof List> = (props) => (
  <List {...props}>
    <ListItem onClick={action('onClick')} title="List item 1">
      This is the description for item 1
    </ListItem>
    <ListItem title="List item 2">This is the description for item 2</ListItem>
    <ListItem title="List item 3">This is the description for item 3</ListItem>
    <ListItem title="List item 4">
      This is the&nbsp;
      <strong>description for item 4</strong>
    </ListItem>
  </List>
)
