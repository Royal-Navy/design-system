import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { DataList, DataListProps, DataListItem } from './index'

export default {
  component: DataList,
  subcomponents: { DataListItem },
  title: 'Data List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

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

export const Default: Story<DataListProps> = (props) => (
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

export const Collapsible: Story<DataListProps> = () => (
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
