import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { List, ListItem } from '.'

export default {
  component: List,
  subcomponents: { ListItem },
  title: 'List',
} as Meta

export const Default = (props: any) => (
  <List {...props}>
    <ListItem
      onClick={(e: React.SyntheticEvent) => console.log}
      title="List item 1"
    >
      This is the description for item 1
    </ListItem>
    <ListItem
      onClick={(e: React.SyntheticEvent) => console.log}
      title="List item 2"
    >
      This is the description for item 2
    </ListItem>
    <ListItem
      onClick={(e: React.SyntheticEvent) => console.log}
      title="List item 3"
    >
      This is the description for item 3
    </ListItem>
    <ListItem
      onClick={(e: React.SyntheticEvent) => console.log}
      title="List item 4"
    >
      This is the description for item 4
    </ListItem>
  </List>
)
