import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Table from './index'

const stories = storiesOf('Table', module)

stories.addDecorator(withKnobs)
stories.addParameters({
  info: { inline: true, header: false },
})

const headings = ['Ferry Name', 'In Service', 'From', 'To', 'Capacity']
const tableData = [
  ['St Faith', 2001, 'Isle of Wight', 'Portsmouth', 500],
  ['St Cecilia', 2003, 'Portsmouth', 'Southampton', 340],
  ['St Clare', 1993, 'Portsmouth', 'Isle of Wight', 225],
  ['Wight Sun', 2008, 'Gosport', 'Portsmouth', 65],
]

stories.add('Simple', () => <Table headings={headings} tableData={tableData} />)

stories.add('Caption', () => (
  <Table caption="Test Caption" headings={headings} tableData={tableData} />
))
