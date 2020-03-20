import React from 'react'
import { storiesOf } from '@storybook/react'

import { DataList, DataListItem } from './index'

const stories = storiesOf('DataList', module)

stories.add('Default', () => (
  <DataList title="Title">
    <DataListItem description="Name">Horatio Nelson</DataListItem>
    <DataListItem description="Age">44</DataListItem>
    <DataListItem description="Location">Portsmouth</DataListItem>
    <DataListItem description="Departure">2230</DataListItem>
    <DataListItem description="Water Temperature">25C</DataListItem>
    <DataListItem description="Wind Speed">8Kts</DataListItem>
  </DataList>
))
