import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled, { css, CSSProp } from 'styled-components'
import { format } from 'date-fns'
import {
  ColorDanger500,
  ColorNeutral100,
  ColorNeutral200,
  selectors,
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
import { accessibilityConfig } from '../../../.storybook/accessibilityConfig'

const { fontSize } = selectors

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
    a11y: {
      config: {
        rules: accessibilityConfig['Compound Timeline'],
      },
    },
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
Default.storyName = 'No data'

export const BoundByFixedDates = Template.bind({})
BoundByFixedDates.args = {
  endDate: new Date(2021, 1, 15),
  startDate: new Date(2021, 0, 13),
  today: new Date(2021, 0, 15),
}
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

WithHours.storyName = 'With hours'

const StyledCustomTimelineMonth = styled.span<{
  dayWidth: number
  daysTotal: number
}>`
  display: inline-block;
  width: ${({ dayWidth, daysTotal }) => dayWidth * daysTotal}px;
  height: 4rem;
  background-color: black;
  color: white;
  border-left: 1px solid white;
  padding-left: 0.5rem;
`

export const WithCustomMonths: ComponentStory<typeof Timeline> = (props) => {
  return (
    <Timeline
      {...props}
      hasSide
      startDate={new Date(2020, 3, 1)}
      today={new Date(2020, 3, 15)}
    >
      <TimelineTodayMarker />
      <TimelineMonths
        render={({ dayWidth, daysTotal, startDate }) => (
          <StyledCustomTimelineMonth dayWidth={dayWidth} daysTotal={daysTotal}>
            {format(startDate, 'MMMM yyyy')}
          </StyledCustomTimelineMonth>
        )}
      />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
}

WithCustomMonths.storyName = 'With custom months'

const StyledCustomTimelineWeek = styled.span<{
  isOddNumber: boolean
  offsetPx: string
  widthPx: string
}>`
  display: inline-block;
  margin-left: ${({ offsetPx }) => offsetPx};
  width: ${({ widthPx }) => widthPx};
  height: 2.5rem;
  background-color: ${({ isOddNumber }) => (isOddNumber ? 'black' : 'white')};
  color: ${({ isOddNumber }) => (isOddNumber ? 'white' : 'black')};
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
`

export const WithCustomWeeks: ComponentStory<typeof Timeline> = (props) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks
      render={({ isOddNumber, offsetPx, widthPx, startDate }) => (
        <StyledCustomTimelineWeek
          isOddNumber={isOddNumber}
          offsetPx={offsetPx}
          widthPx={widthPx}
        >
          {format(startDate, 'dd/MM')}
        </StyledCustomTimelineWeek>
      )}
    />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomWeeks.storyName = 'With custom weeks'

const StyledCustomTimelineDays = styled.span<{ dayWidth: number }>`
  display: inline-block;
  width: ${({ dayWidth }) => dayWidth}px;
  height: 2.5rem;
  background-color: black;
  color: white;
`

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
    <TimelineDays
      render={({ dayWidth, date }) => (
        <StyledCustomTimelineDays dayWidth={dayWidth}>
          {format(date, 'dd')}
        </StyledCustomTimelineDays>
      )}
    />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomDays.storyName = 'With custom days'

const StyledCustomTimelineHours = styled.div<{ width: number }>`
  display: inline-block;
  width: ${({ width }) => width}px;
  height: 2.5rem;
  background-color: black;
  color: white;

  span {
    font-size: 8px;
    padding-left: 5px;
  }
`

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
    <TimelineHours
      render={({ width, time }) => (
        <StyledCustomTimelineHours width={width}>
          <span>{time}</span>
        </StyledCustomTimelineHours>
      )}
    />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomHours.storyName = 'With custom hours'

const StyledCustomTodayMarker = styled.span<{ offset: string }>`
  position: absolute;
  left: ${({ offset }) => offset};
  height: 100vh;
  width: 2px;
  background: black;
  overflow: visible;
  font-size: ${fontSize('s')};
  white-space: nowrap;
  text-indent: 1rem;
  z-index: 1;
`

export const WithCustomTodayMarker: ComponentStory<typeof Timeline> = (
  props
) => (
  <Timeline
    {...props}
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 15)}
  >
    <TimelineTodayMarker
      render={({ offset, today }) => (
        <StyledCustomTodayMarker offset={offset}>
          {today.toUTCString()}
        </StyledCustomTodayMarker>
      )}
    />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineRows>{}</TimelineRows>
  </Timeline>
)

WithCustomTodayMarker.storyName = 'With custom today marker'

const StyledCustomTimelineColumn = styled.div<{
  isOddNumber: boolean
  offsetPx: string
  widthPx: string
}>`
  display: inline-block;
  width: ${({ widthPx }) => widthPx};
  margin-left: ${({ offsetPx }) => offsetPx};
  background-color: ${({ isOddNumber }) => (isOddNumber ? 'black' : 'white')};
  height: 100vh;
`

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
    <TimelineRows
      render={({ isOddNumber, offsetPx, widthPx }) => (
        <StyledCustomTimelineColumn
          isOddNumber={isOddNumber}
          offsetPx={offsetPx}
          widthPx={widthPx}
        />
      )}
    >
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

WithCustomEventBarColor.storyName = 'With custom event bar color'

const StyledCustomEvent = styled.div<{
  startDate: Date
  endDate: Date
  widthPx: string
  offsetPx: string
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  color: white;
  margin-left: ${({ offsetPx }) => offsetPx};
  width: ${({ widthPx }) => widthPx};
`

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
                <StyledCustomEvent
                  startDate={startDate}
                  endDate={endDate}
                  widthPx={widthPx}
                  offsetPx={offsetPx}
                >
                  Event 1
                </StyledCustomEvent>
              )
            }}
          />
          <TimelineEvent
            startDate={new Date(2020, 3, 16)}
            endDate={new Date(2020, 3, 20)}
            render={({ startDate, endDate, widthPx, offsetPx }) => {
              return (
                <StyledCustomEvent
                  startDate={startDate}
                  endDate={endDate}
                  widthPx={widthPx}
                  offsetPx={offsetPx}
                >
                  Event 2
                </StyledCustomEvent>
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
FullWidth.storyName = 'Full width'
