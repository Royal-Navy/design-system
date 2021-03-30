import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Tab, TabSet } from '.'

export default {
  component: TabSet,
  subcomponents: { Tab },
  title: 'Tab Set',
} as Meta

export const Default = (props: any) => (
  <TabSet {...props}>
    <Tab title="Example Tab 1">
      <p>example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2">
      <p>example tab 2 content</p>
    </Tab>
    <Tab title="Example Tab 3">
      <p>example tab 3 content</p>
    </Tab>
  </TabSet>
)

Default.args = {
  onChange: (e: React.SyntheticEvent) => console.log,
}

export const InitialActiveTab = () => (
  <TabSet onChange={(id: number) => console.log}>
    <Tab title="Example Tab 1">
      <p>example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2" isActive>
      <p>example tab 2 content</p>
    </Tab>
    <Tab title="Example Tab 3">
      <p>example tab 3 content</p>
    </Tab>
  </TabSet>
)

InitialActiveTab.storyName = 'Initial active tab'

export const FullWidth = () => (
  <TabSet isFullWidth onChange={(id: number) => console.log}>
    <Tab title="Example Tab 1">
      <p>example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2">
      <p>example tab 2 content</p>
    </Tab>
  </TabSet>
)

FullWidth.storyName = 'Full width'

export const ScrollableBody = () => (
  <div style={{ height: '200px' }}>
    <TabSet onChange={(id: number) => console.log}>
      <Tab title="Example Tab 1">
        <>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
          <p>scrollable tab 1 content</p>
        </>
      </Tab>
      <Tab title="Example Tab 2">
        <>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
          <p>scrollable tab 2 content</p>
        </>
      </Tab>
    </TabSet>
  </div>
)

ScrollableBody.storyName = 'Scrollable body content'

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

export const Scrollable = () => (
  <TabSet isScrollable>
    <Tab title={<TabTitle year={2019}>01/02</TabTitle>}>
      <p>example tab 1 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>02/02</TabTitle>}>
      <p>example tab 2 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>03/02</TabTitle>}>
      <p>example tab 3 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>04/02</TabTitle>}>
      <p>example tab 4 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>05/02</TabTitle>}>
      <p>example tab 5 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>06/02</TabTitle>}>
      <p>example tab 6 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>07/02</TabTitle>}>
      <p>example tab 7 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>08/02</TabTitle>}>
      <p>example tab 8 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>09/02</TabTitle>}>
      <p>example tab 9 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>10/02</TabTitle>}>
      <p>example tab 10 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>11/02</TabTitle>}>
      <p>example tab 11 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>12/02</TabTitle>}>
      <p>example tab 12 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>13/02</TabTitle>}>
      <p>example tab 13 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>14/02</TabTitle>}>
      <p>example tab 14 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>15/02</TabTitle>}>
      <p>example tab 15 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>16/02</TabTitle>}>
      <p>example tab 16 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>17/02</TabTitle>}>
      <p>example tab 17 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>18/02</TabTitle>}>
      <p>example tab 18 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>19/02</TabTitle>}>
      <p>example tab 19 content</p>
    </Tab>
    <Tab title={<TabTitle year={2019}>20/02</TabTitle>}>
      <p>example tab 20 content</p>
    </Tab>
  </TabSet>
)

Scrollable.storyName = 'Scrollable paged tabs'
