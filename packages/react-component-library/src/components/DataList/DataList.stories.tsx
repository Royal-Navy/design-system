import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DataList, DataListItem } from './index'

export default {
  component: DataList,
  subcomponents: { DataListItem },
  title: 'Data List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof DataList>

const disableDefinitionList = {
  a11y: {
    config: {
      rules: [
        {
          id: 'definition-list',
          enabled: false,
        },
        {
          id: 'dlitem',
          enabled: false,
        },
      ],
    },
  },
}

export const Default: ComponentStory<typeof DataList> = (props) => (
  <DataList {...props}>
    <DataListItem description="Name">Horatio Nelson</DataListItem>
    <DataListItem description="Age">44</DataListItem>
    <DataListItem description="Location">Portsmouth</DataListItem>
    <DataListItem description="Departure">2230</DataListItem>
    <DataListItem description="Water Temperature">25C</DataListItem>
    <DataListItem description="Wind Speed">8Kts</DataListItem>
  </DataList>
)

Default.parameters = disableDefinitionList

Default.args = {
  title: 'Example Title',
}

Default.storyName = 'Default'

export const Collapsible: ComponentStory<typeof DataList> = () => (
  <DataList title="Example Title" isCollapsible>
    <DataListItem description="Name">Horatio Nelson</DataListItem>
    <DataListItem description="Age">44</DataListItem>
    <DataListItem description="Location">Portsmouth</DataListItem>
    <DataListItem description="Departure">2230</DataListItem>
    <DataListItem description="Water Temperature">25C</DataListItem>
    <DataListItem description="Wind Speed">8Kts</DataListItem>
  </DataList>
)

Collapsible.parameters = disableDefinitionList

Collapsible.storyName = 'Collapsible'
