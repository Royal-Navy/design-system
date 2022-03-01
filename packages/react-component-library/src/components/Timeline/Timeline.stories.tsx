import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { css, CSSProp } from 'styled-components'
import { format } from 'date-fns'
import {
  ColorDanger500,
  ColorNeutral100,
  ColorNeutral200,
} from '@defencedigital/design-tokens'

import {
  Timeline,
  TimelineEvent,
  TimelineEvents,
  TimelineHours,
  TimelineRow,
  TimelineRows,
  TimelineTodayMarker,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
} from '.'
import { TIMELINE_BLOCK_SIZE } from './constants'

export default {
  component: Timeline,
  subcomponents: {
    TimelineEvent,
    TimelineEvents,
    TimelineHours,
    TimelineRow,
    TimelineRows,
    TimelineTodayMarker,
    TimelineMonths,
    TimelineWeeks,
    TimelineDays,
  },
  title: 'Compound Timeline',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'A collection of composable and presentation agnostic Compound Components, Hooks and a Context Provider, to help aid in the creation of scheduling based user-interfaces. Visit the [Compound Timeline microsite](https://design-system.digital.mod.uk/timeline) for more comprehensive documentation.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    endDate: {
      control: {
        type: 'date',
      },
    },
    startDate: {
      control: {
        type: 'date',
      },
    },
    today: {
      control: {
        type: 'date',
      },
    },
  },
} as ComponentMeta<typeof Timeline>

const disableScrollableRegionFocusableRule = {
  a11y: {
    config: {
      rules: [
        {
          id: 'scrollable-region-focusable',
          enabled: false,
        },
      ],
    },
  },
}

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

export const Default = Template.bind({})
Default.args = {
  startDate: new Date(2022, 0, 1),
  today: new Date(2022, 0, 15),
}
Default.parameters = disableScrollableRegionFocusableRule
Default.storyName = 'No data'

export const BoundByFixedDates = Template.bind({})
BoundByFixedDates.args = {
  endDate: new Date(2021, 1, 15),
  startDate: new Date(2021, 0, 13),
  today: new Date(2021, 0, 15),
}
BoundByFixedDates.parameters = disableScrollableRegionFocusableRule
BoundByFixedDates.storyName = 'Bound by fixed dates'

export const WithData: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    startDate={new Date(2020, 9, 1)}
    today={new Date(2020, 9, 15, 12)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 14, 12)}
            endDate={new Date(2020, 9, 18, 12)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 3)}
            endDate={new Date(2020, 9, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

WithData.parameters = disableScrollableRegionFocusableRule
WithData.storyName = 'With data'

export const WithSidebar: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 2, 14)}
            endDate={new Date(2020, 3, 18)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 3)}
            endDate={new Date(2020, 3, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 3">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 1, 3)}
            endDate={new Date(2020, 7, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

WithSidebar.parameters = disableScrollableRegionFocusableRule

WithSidebar.storyName = 'With sidebar'

export const WithHours: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineHours blockSize={TIMELINE_BLOCK_SIZE.QUARTER_DAY} />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 5, 6, 0, 0)}
            endDate={new Date(2020, 3, 7, 18, 0, 0)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 3, 12, 0, 0)}
            endDate={new Date(2020, 3, 6, 12, 0, 0)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

WithHours.parameters = disableScrollableRegionFocusableRule

WithHours.storyName = 'With hours'

const CustomTimelineMonth = ({
  index: _,
  dayWidth,
  daysTotal,
  startDate,
}: {
  index: number
  dayWidth: number
  daysTotal: number
  startDate: Date
}) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: `${dayWidth * daysTotal}px`,
        height: '4rem',
        backgroundColor: 'black',
        color: 'white',
        borderLeft: '1px solid white',
        paddingLeft: '.5rem',
      }}
    >
      {format(startDate, 'MMMM yyyy')}
    </span>
  )
}

export const WithCustomMonths: ComponentStory<typeof Timeline> = (props) => {
  return (
    <Timeline
      {...props}
      hasSide
      startDate={new Date(2020, 3, 1)}
      today={new Date(2020, 3, 15)}
    >
      <TimelineTodayMarker />
      <TimelineMonths render={CustomTimelineMonth} />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
}

WithCustomMonths.parameters = disableScrollableRegionFocusableRule

WithCustomMonths.storyName = 'With custom months'

const CustomTimelineWeek = ({
  index: _,
  isOddNumber,
  offsetPx,
  widthPx,
  startDate,
}: {
  index: number
  isOddNumber: boolean
  offsetPx: string
  widthPx: string
  startDate: Date
}) => (
  <span
    style={{
      display: 'inline-block',
      marginLeft: offsetPx,
      width: widthPx,
      height: '2.5rem',
      backgroundColor: `${isOddNumber ? 'black' : 'white'}`,
      color: `${isOddNumber ? 'white' : 'black'}`,
      borderTop: '1px solid black',
      borderBottom: '1px solid black',
      paddingLeft: '.5rem',
    }}
  >
    {format(startDate, 'dd/MM')}
  </span>
)

export const WithCustomWeeks: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks render={CustomTimelineWeek} />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomWeeks.parameters = disableScrollableRegionFocusableRule

WithCustomWeeks.storyName = 'With custom weeks'

const CustomTimelineDays = ({
  index: _,
  dayWidth,
  date,
}: {
  index: number
  dayWidth: number
  date: Date
}) => (
  <span
    style={{
      display: 'inline-block',
      width: `${dayWidth}px`,
      height: '2.5rem',
      backgroundColor: 'black',
      color: 'white',
    }}
  >
    {format(date, 'dd')}
  </span>
)

export const WithCustomDays: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays render={CustomTimelineDays} />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomDays.parameters = disableScrollableRegionFocusableRule

WithCustomDays.storyName = 'With custom days'

const CustomTimelineHours = ({
  width,
  time,
}: {
  width: number
  time: string
}) => (
  <div
    style={{
      display: 'inline-block',
      width: `${width}px`,
      height: '2.5rem',
      backgroundColor: 'black',
      color: 'white',
    }}
  >
    <span style={{ fontSize: '8px', paddingLeft: '5px' }}>{time}</span>
  </div>
)

export const WithCustomHours: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineHours render={CustomTimelineHours} />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomHours.parameters = disableScrollableRegionFocusableRule

WithCustomHours.storyName = 'With custom hours'

const CustomTodayMarker = ({
  today,
  offset,
}: {
  today: Date
  offset: string
}) => (
  <span
    className="rn_text-s"
    style={{
      position: 'absolute',
      left: offset,
      height: '100vh',
      width: '2px',
      background: 'black',
      overflow: 'visible',
      whiteSpace: 'nowrap',
      textIndent: '1rem',
      zIndex: 1,
    }}
  >
    {today.toUTCString()}
  </span>
)

export const WithCustomTodayMarker: ComponentStory<typeof Timeline> = (
  props
) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker render={CustomTodayMarker} />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomTodayMarker.parameters = disableScrollableRegionFocusableRule

WithCustomTodayMarker.storyName = 'With custom today marker'

const CustomTimelineColumn = ({
  index: _,
  isOddNumber,
  offsetPx,
  widthPx,
}: {
  index: number
  isOddNumber: boolean
  offsetPx: string
  widthPx: string
}) => (
  <div
    style={{
      display: 'inline-block',
      width: widthPx,
      marginLeft: offsetPx,
      backgroundColor: `${isOddNumber ? 'black' : 'white'}`,
      height: '100vh',
    }}
  />
)

export const WithCustomColumns: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows render={CustomTimelineColumn}>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 14)}
            endDate={new Date(2020, 3, 18)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 3)}
            endDate={new Date(2020, 3, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

WithCustomColumns.parameters = disableScrollableRegionFocusableRule

WithCustomColumns.storyName = 'With custom columns'

export const WithCustomRowCss: ComponentStory<typeof Timeline> = (props) => {
  const rowCss: CSSProp = css`
    height: 40px;
  `
  const rowContentProps = {
    css: css`
      background-color: ${ColorNeutral100};
    `,
  }
  const rowHeaderProps = {
    css: css`
      background-color: ${ColorNeutral200};
    `,
  }

  return (
    <Timeline
      {...props}
      hasSide
      startDate={new Date(2020, 3, 1)}
      endDate={new Date(2020, 4, 30)}
      today={new Date(2020, 3, 15)}
    >
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow
          css={rowCss}
          contentProps={rowContentProps}
          headerProps={rowHeaderProps}
          name="Row 1"
          render={() => <span>Row with custom style</span>}
        >
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 2, 14)}
              endDate={new Date(2020, 3, 18)}
            >
              Event 1
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}

WithCustomRowCss.parameters = disableScrollableRegionFocusableRule

WithCustomRowCss.storyName = 'With custom row CSS'

export const WithCustomEventBarColor: ComponentStory<typeof Timeline> = (
  props
) => {
  return (
    <Timeline
      {...props}
      hasSide
      startDate={new Date(2020, 3, 1)}
      today={new Date(2020, 3, 15)}
    >
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              barColor={ColorDanger500}
              startDate={new Date(2020, 3, 14)}
              endDate={new Date(2020, 3, 18)}
            >
              Event 1
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}

WithCustomEventBarColor.parameters = disableScrollableRegionFocusableRule

WithCustomEventBarColor.storyName = 'With custom event bar color'

const CustomEvent = ({
  children,
  startDate,
  endDate,
  widthPx,
  offsetPx,
  ...rest
}: {
  children: React.ReactNode
  startDate: Date
  endDate: Date
  widthPx: string
  offsetPx: string
}) => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'black',
      color: 'white',
      marginLeft: offsetPx,
      width: widthPx,
    }}
    {...rest}
  >
    {children}
  </div>
)

export const WithCustomEventContent: ComponentStory<typeof Timeline> = (
  props
) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 6)}
            endDate={new Date(2020, 3, 10)}
            render={({ startDate, endDate, widthPx, offsetPx }) => {
              return (
                <CustomEvent
                  startDate={startDate}
                  endDate={endDate}
                  widthPx={widthPx}
                  offsetPx={offsetPx}
                >
                  Event 1
                </CustomEvent>
              )
            }}
          />
          <TimelineEvent
            startDate={new Date(2020, 3, 16)}
            endDate={new Date(2020, 3, 20)}
            render={({ startDate, endDate, widthPx, offsetPx }) => {
              return (
                <CustomEvent
                  startDate={startDate}
                  endDate={endDate}
                  widthPx={widthPx}
                  offsetPx={offsetPx}
                >
                  Event 2
                </CustomEvent>
              )
            }}
          />
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 15)}
            endDate={new Date(2020, 3, 19)}
          >
            Event 3
          </TimelineEvent>
          <TimelineEvent
            startDate={new Date(2020, 3, 22)}
            endDate={new Date(2020, 3, 24)}
          >
            Event 4
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

WithCustomEventContent.parameters = disableScrollableRegionFocusableRule

WithCustomEventContent.storyName = 'With custom event content'

export const WithCustomDayWidth: ComponentStory<typeof Timeline> = (props) => {
  return (
    <Timeline
      {...props}
      hasSide
      startDate={new Date(2020, 3, 1)}
      today={new Date(2020, 3, 15)}
      unitWidth={75}
    >
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 25)}
              endDate={new Date(2020, 3, 28)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 22)}
              endDate={new Date(2020, 3, 24)}
            >
              Event 4
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}

WithCustomDayWidth.parameters = disableScrollableRegionFocusableRule

WithCustomDayWidth.storyName = 'With custom day width'

export const WithCustomRange: ComponentStory<typeof Timeline> = (props) => {
  return (
    <Timeline
      {...props}
      hasSide
      startDate={new Date(2020, 3, 1)}
      today={new Date(2020, 3, 15)}
      range={6}
    >
      <TimelineTodayMarker />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 25)}
              endDate={new Date(2020, 3, 28)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 22)}
              endDate={new Date(2020, 3, 24)}
            >
              Event 4
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}

WithCustomRange.parameters = disableScrollableRegionFocusableRule

WithCustomRange.storyName = 'With custom range'

export const NoVisibleCells: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    startDate={new Date(2020, 0, 1)}
    today={new Date(2020, 0, 1, 12)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 14, 12)}
            endDate={new Date(2020, 3, 18, 12)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

NoVisibleCells.parameters = disableScrollableRegionFocusableRule

NoVisibleCells.storyName = 'No visible cells'

export const HiddenToolbar: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hideToolbar
    startDate={new Date(2020, 9, 1)}
    today={new Date(2020, 9, 15, 12)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 14, 12)}
            endDate={new Date(2020, 9, 18, 12)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 3)}
            endDate={new Date(2020, 9, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

HiddenToolbar.parameters = disableScrollableRegionFocusableRule

HiddenToolbar.storyName = 'Hidden toolbar'

export const HiddenScaling: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hideScaling
    startDate={new Date(2020, 9, 1)}
    today={new Date(2020, 9, 15, 12)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 14, 12)}
            endDate={new Date(2020, 9, 18, 12)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 3)}
            endDate={new Date(2020, 9, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)

HiddenScaling.parameters = disableScrollableRegionFocusableRule

HiddenScaling.storyName = 'Hidden scaling'

export const FullWidth = () => (
  <Timeline
    isFullWidth
    startDate={new Date(2020, 9, 1)}
    today={new Date(2020, 9, 15, 12)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineHours />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 14, 12)}
            endDate={new Date(2020, 9, 18, 12)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 9, 3)}
            endDate={new Date(2020, 9, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)
FullWidth.parameters = disableScrollableRegionFocusableRule
FullWidth.storyName = 'Full width'
