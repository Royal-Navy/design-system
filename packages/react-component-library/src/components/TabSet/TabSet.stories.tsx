import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Tab, TabSet } from '.'

const stories = storiesOf('TabSet', module)

stories.add('Default', () => (
  <TabSet onChange={action('onChange')}>
    <Tab title="Example Tab 1">
      <p>This is some example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2">
      <p>This is some example tab 2 content</p>
    </Tab>
    <Tab title="Example Tab 3">
      <p>This is some example tab 3 content</p>
    </Tab>
    <Tab title="Example Tab 4">
      <p>This is some example tab 4 content</p>
    </Tab>
  </TabSet>
))

interface TabTitleProps {
  children: string
  year: number
}

const TabTitle: React.FC<TabTitleProps> = ({ year, children }) => (
  <>
    <div style={{ fontSize: '14px' }}>{children}</div>
    <div style={{ fontSize: '12px' }}>{year}</div>
  </>
)

stories.add('Scrollable', () => (
  <TabSet isScrollable>
    <Tab title={<TabTitle year={2019}>01/02</TabTitle>}>
      <p>This is some example tab 1 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>02/02</TabTitle>}>
      <p>This is some example tab 2 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>03/02</TabTitle>}>
      <p>This is some example tab 3 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>04/02</TabTitle>}>
      <p>This is some example tab 4 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>05/02</TabTitle>}>
      <p>This is some example tab 5 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>06/02</TabTitle>}>
      <p>This is some example tab 6 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>07/02</TabTitle>}>
      <p>This is some example tab 7 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>08/02</TabTitle>}>
      <p>This is some example tab 8 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>09/02</TabTitle>}>
      <p>This is some example tab 9 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>10/02</TabTitle>}>
      <p>This is some example tab 10 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>11/02</TabTitle>}>
      <p>This is some example tab 11 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>12/02</TabTitle>}>
      <p>This is some example tab 12 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>13/02</TabTitle>}>
      <p>This is some example tab 13 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>14/02</TabTitle>}>
      <p>This is some example tab 14 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>15/02</TabTitle>}>
      <p>This is some example tab 15 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>16/02</TabTitle>}>
      <p>This is some example tab 16 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>17/02</TabTitle>}>
      <p>This is some example tab 17 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>18/02</TabTitle>}>
      <p>This is some example tab 18 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>19/02</TabTitle>}>
      <p>This is some example tab 19 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>20/02</TabTitle>}>
      <p>This is some example tab 20 content</p>
    </Tab>
  </TabSet>
))
