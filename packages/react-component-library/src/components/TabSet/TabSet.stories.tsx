import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'

import { ScrollableTabSetProps, TabSetItem, TabSet, TabSetProps } from '.'

export default {
  component: TabSet,
  subcomponents: { TabSetItem },
  title: 'Tab Set',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'Use this component to switch between visible areas within the confines of a page.',
      },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TabSet>

export const Default: Story<TabSetProps> = (props) => (
  <TabSet {...props}>
    <TabSetItem title="Example Tab 1">
      <p>Example tab 1 content</p>
    </TabSetItem>
    <TabSetItem title="Example Tab 2">
      <p>Example tab 2 content</p>
    </TabSetItem>
    <TabSetItem title="Example Tab 3">
      <p>Example tab 3 content</p>
    </TabSetItem>
  </TabSet>
)

Default.args = {}

export const InitialActiveTab: Story<TabSetProps> = (props) => (
  <TabSet {...props}>
    <TabSetItem title="Example Tab 1">
      <p>Example tab 1 content</p>
    </TabSetItem>
    <TabSetItem title="Example Tab 2" isActive>
      <p>Example tab 2 content</p>
    </TabSetItem>
    <TabSetItem title="Example Tab 3">
      <p>Example tab 3 content</p>
    </TabSetItem>
  </TabSet>
)

InitialActiveTab.storyName = 'Initial active tab'

export const FullWidth: Story<TabSetProps> = (props) => (
  <TabSet {...props} isFullWidth>
    <TabSetItem title="Example Tab 1">
      <p>Example tab 1 content</p>
    </TabSetItem>
    <TabSetItem title="Example Tab 2">
      <p>Example tab 2 content</p>
    </TabSetItem>
  </TabSet>
)

FullWidth.storyName = 'Full width'

export const ScrollableBody: Story<TabSetProps> = (props) => (
  <div css={{ height: '200px' }}>
    <TabSet {...props}>
      <TabSetItem title="Example Tab 1">
        <>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
          <p>Scrollable tab 1 content</p>
        </>
      </TabSetItem>
      <TabSetItem title="Example Tab 2">
        <>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
          <p>Scrollable tab 2 content</p>
        </>
      </TabSetItem>
    </TabSet>
  </div>
)

ScrollableBody.storyName = 'Scrollable body content'

interface TabTitleProps {
  children: string
  year: number
}

const TabTitle = ({ year, children }: TabTitleProps) => (
  <>
    <div css={{ fontSize: '14px' }}>{children}</div>
    <div css={{ fontSize: '12px' }}>{year}</div>
  </>
)

export const Scrollable: Story<ScrollableTabSetProps> = (props) => (
  <TabSet {...props} isScrollable>
    <TabSetItem title={<TabTitle year={2019}>01/02</TabTitle>}>
      <p>Example tab 1 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>02/02</TabTitle>}>
      <p>Example tab 2 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>03/02</TabTitle>}>
      <p>Example tab 3 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>04/02</TabTitle>}>
      <p>Example tab 4 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>05/02</TabTitle>}>
      <p>Example tab 5 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>06/02</TabTitle>}>
      <p>Example tab 6 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>07/02</TabTitle>}>
      <p>Example tab 7 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>08/02</TabTitle>}>
      <p>Example tab 8 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>09/02</TabTitle>}>
      <p>Example tab 9 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>10/02</TabTitle>}>
      <p>Example tab 10 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>11/02</TabTitle>}>
      <p>Example tab 11 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>12/02</TabTitle>}>
      <p>Example tab 12 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>13/02</TabTitle>}>
      <p>Example tab 13 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>14/02</TabTitle>}>
      <p>Example tab 14 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>15/02</TabTitle>}>
      <p>Example tab 15 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>16/02</TabTitle>}>
      <p>Example tab 16 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>17/02</TabTitle>}>
      <p>Example tab 17 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>18/02</TabTitle>}>
      <p>Example tab 18 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>19/02</TabTitle>}>
      <p>Example tab 19 content</p>
    </TabSetItem>
    <TabSetItem title={<TabTitle year={2019}>20/02</TabTitle>}>
      <p>Example tab 20 content</p>
    </TabSetItem>
  </TabSet>
)

Scrollable.storyName = 'Scrollable paged tabs'
