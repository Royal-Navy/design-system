---
title: Compound Timeline
description: A collection of composable and presentation agnostic Compound Components, Hooks and a Context Provider, to help aid in the creation of scheduling based user-interfaces.
tags: public
template: framework
---

import { Badge } from '@royalnavy/react-component-library'
import { ExampleTimeline } from '../../../components/presenters/example-timeline'
import TimelineLayout from '../../images/components/timeline/Layouts'

<div className="rn-fw-row" id="motivation">
<div className="rn-fw-copy rn-fw-md">

## Motivation

Identify commonality across applications utilising scheduling related patterns, with the aim to abstract out a library that helps to ensure the integrity and future maintainability of applications with disparate sets of scheduling related use cases.

We identified commonality across applications in two key areas:

### How something "looks and feels"
- Somewhat but nuanced based on problem domain

### How something works "under the hood"
- DateTime manipulation
- Positioning and sizing arbitrary components across a timeline
- Generated data structures and state
- Common but extensible interfaces

</div>
<div className="rn-fw-code rn-fw-md">
  
</div>
</div>
<div className="rn-fw-row" id="live-example">
<div className="rn-fw-copy rn-fw-md">

## Live Example
Interact with the Live Example, or view more stories in our [Storybook](https://storybook.royalnavy.io).

</div>
<div className="rn-fw-code rn-fw-demo rn-fw-md">
  <div className="rn-fw-code-header">
    <span className="rn-fw-code-file">Live Example</span>
  </div>
  <div className="rn-fw-demo-wrapper">
    <ExampleTimeline />
  </div>
</div>
</div>

<div className="rn-fw-row" id="installation">
<div className="rn-fw-copy rn-fw-md">

## Installation

You can use either [yarn](https://yarnpkg.com/) or [npm](https://npmjs.com/) to install the framework.

</div>
<div className="rn-fw-code rn-fw-md rn-fw-font-boost">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">Command Line</span>
</div>

```
// npm
npm install @royalnavy/css-framework @royalnavy/react-component-library

// yarn
yarn add @royalnavy/css-framework @royalnavy/react-component-library
```

</div>
</div>


<div className="rn-fw-row" id="options">
<div className="rn-fw-copy rn-fw-md">

## Options

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      startDate
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      endDate
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Bound the timeline by the specified start and end dates.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">today</h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>new Date()</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Today's current date - default is system date time.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">range</h1>
    <Badge color="supa" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>3</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The number of months to display at any one time.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">unitWidth</h1>
    <Badge color="supa" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>30</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The fixed width value of a single day or hour (in pixels).</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">hasSide</h1>
    <Badge color="supa" colorVariant="faded" size="small">Boolean</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Specify whether or not to output sidebar headings.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">TimelineExample.js</span>
</div>

```js
import React from 'react'

import { 
  Timeline, 
  TimelineTodayMarker,
  TimelineMonths, 
  TimelineWeeks, 
  TimelineDays,
  TimelineHours,
  TimelineRows, 
  TimelineRow, 
  TimelineEvents, 
  TimelineEvent 
} from '@royalnavy/react-component-library'

const ExampleTimeline = () => {
  return (
    <Timeline
      hasSide
      startDate={new Date(2020, 3, 1)}
      today={new Date(2020, 3, 3)}
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
              startDate={new Date(2020, 2, 14)}
              endDate={new Date(2020, 3, 4)}
            >
              Event 1
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 2)}
              endDate={new Date(2020, 3, 5)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}
```

</div>
</div>


<div className="rn-fw-row rn-fw-row-section" id="compound-components-composition">
<div className="rn-fw-copy rn-fw-md">

## Compound Components & Composition

In React, [composition](https://reactjs.org/docs/composition-vs-inheritance.html) is a natural pattern of the component model. It's how we build components from other components, of varying complexity and specialization.

The consumer can pick and choose what functionality to include in their Timeline via the declarative JSX API.

</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>


<div className="rn-fw-row" id="custom-component-presentation">
<div className="rn-fw-copy rn-fw-md">

## Custom Component Presentation

We aim to empower the consumer by enabling them to override the presentation of the exposed compound components:

- Full control over look and feel (no opinion about markup or styles)
- Consistent underlying implementation across applications
- Single set of robust automated tests

### Render Props

[Render props](https://reactjs.org/docs/render-props.html) allow us to provide custom persentation layers to our compound components by exposing any relevant internal state. See the example usage for the  `TimelineMonths`  component.

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">TimelineExample.js</span>
</div>

```js
import React from 'react'

import { 
  Timeline, 
  TimelineMonths, 
  TimelineRows 
} from '@royalnavy/react-component-library'

const CustomTimelineMonth = (
  index,
  dayWidth,
  daysTotal,
  startDate
) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: `${dayWidth * daysTotal}px`,
        // ...
      }}
    >
      {startDate}
    </span>
  )
}

const ExampleTimeline = () => {
  return (
    <Timeline>
      <TimelineMonths render={CustomTimelineMonth} />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
}
```


</div>
</div>

<div className="rn-fw-row" id="context-provider">
<div className="rn-fw-copy rn-fw-md">

## Context Provider
[Context](https://reactjs.org/docs/context.html) provides a way to pass data through the component tree without having to pass props down manually at every level.

We expose the `TimelineContext` provider so that a consumer can create their own application specific components. The context provider exposes Timeline state and a `dispatch` function for dispatching reducer actions against the store.

### State & Action dispatcher

In this example we have created a custom component that consumes Timeline related state and dispatches reducer actions when buttons are clicked.

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">ContextExample.js</span>
</div>

```js
import React, { useContext } from 'react' 

import { 
  Timeline, 
  TimelineRows 
  TimelineContext, 
  TIMELINE_ACTIONS 
} from '@royalnavy/react-component-library'

const CustomTimelineComponent = () => {
  const { state: { months, weeks, days, options }, dispatch } = useContext(TimelineContext)

  return (
    <div>
      <button onClick={_ => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}>Previous</button>
      <button onClick={_ => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}>Next</button>
    </div>
  )
}

const ExampleTimeline = () => {
  return (
    <Timeline>
      <CustomTimelineComponent />
      <TimelineRows>{}</TimelineRows>
    </Timeline>
  )
}
```


</div>
</div>

<div className="rn-fw-row" id="hooks">
<div className="rn-fw-copy rn-fw-md">

## Hooks
We expose some [hooks](https://reactjs.org/docs/hooks-intro.html) in order to aid in the creation of your own custom Timeline components.

### useTimelinePosition

This hook takes a `startDate` and optional `endDate` and in return exposes the width and position (in the form of an `offset`) of an item relative to the date range currently displayed by the Timeline.

</div>
<div className="rn-fw-code rn-fw-md">

<div className="rn-fw-code-header">
  <span className="rn-fw-code-file">HooksExample.js</span>
</div>

```js
import React from 'react'

import { useTimelinePosition } from '@royalnavy/react-component-library'

const CustomTimelineComponent = ({
  startDate,
  endDate
}) => {
  const {
    width,
    offset,
    startsBeforeStart,
    startsAfterEnd
  } = useTimelinePosition(startDate, endDate)

  if (startsBeforeStart || startsAfterEnd) return null

  return (
    <div style={{
        position: 'absolute',
        display: 'inline-block',
        width,
        left: offset
        // ...
      }} 
    />
  )
}
```

</div>
</div>

<div className="rn-fw-row" id="advanced-custom-layouts">
<div className="rn-fw-copy rn-fw-md">

## Advanced Custom Layouts
Through the use of clever composition and custom styling, it's possible to create layouts that are either nuanced or high in complexity. Here is an [example of a custom layout](https://github.com/m7kvqbe1/fp-grey-box) that adds groupings to rows:

<div className="rn-fw-diagram">
  <TimelineLayout />
</div>

</div>
<div className="rn-fw-code rn-fw-md">
</div>
</div>


<div className="rn-fw-row rn-fw-row-section" id="hook-apis">
<div className="rn-fw-copy rn-fw-md">

## Hook APIs
Here you will find comprehensive API documentation for the Timeline Hooks.

</div>
<div className="rn-fw-code rn-fw-md">

</div>
</div>

<div className="rn-fw-row" id="useTimelinePosition">
<div className="rn-fw-copy rn-fw-md">

## useTimelinePosition

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      startDate
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The start date of the event.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">endDate</h1>
    <Badge color="supa" colorVariant="faded" size="small">Date &#124; Null</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Null</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The end date of the event.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">

</div>
</div>


<div className="rn-fw-row rn-fw-row-section">
<div className="rn-fw-copy rn-fw-md">

## Component APIs
Here you will find comprehensive API documentation for the Timeline Components.

</div>
<div className="rn-fw-code rn-fw-md">

</div>
</div>


<div className="rn-fw-row" id="timeline">
<div className="rn-fw-copy rn-fw-md">

## Timeline

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      startDate
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A month will display either side of this start date.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      endDate
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Bound the timeline by the specified start and end dates.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">today</h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>new Date()</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Today's current date - default is the system date time.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">range</h1>
    <Badge color="supa" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>3</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The number of months to display at any one time.</p>
    </div>
  </div>
</div>


<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">unitWidth</h1>
    <Badge color="supa" colorVariant="faded" size="small">Number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>30</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The fixed width value of a single day (in pixels).</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">hasSide</h1>
    <Badge color="supa" colorVariant="faded" size="small">Boolean</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Specify whether or not to output sidebar headings.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">className</h1>
    <Badge color="supa" colorVariant="faded" size="small">String</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Custom CSS class to add to the component.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>


<div className="rn-fw-row" id="timeline-today-marker">
<div className="rn-fw-copy rn-fw-md">

## TimelineTodayMarker

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value"><code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">today</code>
            <span className="rn-fw-api-value-type">Date</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">offset</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row" id="timeline-side">
<div className="rn-fw-copy rn-fw-md">

## TimelineSide (Deprecated)

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>        
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row" id="timeline-months">
<div className="rn-fw-copy rn-fw-md">

## TimelineMonths

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value"><code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">index</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">dayWidth</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">daysTotal</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">startDate</code>
            <span className="rn-fw-api-value-type">Date</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row" id="timeline-weeks">
<div className="rn-fw-copy rn-fw-md">

## TimelineWeeks

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value"><code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">index</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">isOddNumber</code>
            <span className="rn-fw-api-value-type">boolean</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">offsetPx</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">widthPx</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">dayWidth</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">daysTotal</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">startDate</code>
            <span className="rn-fw-api-value-type">Date</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>



<div className="rn-fw-row" id="timeline-days">
<div className="rn-fw-copy rn-fw-md">

## TimelineDays

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value"><code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">index</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">dayWidth</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">date</code>
            <span className="rn-fw-api-value-type">Date</span>
          </li>          
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>


<div className="rn-fw-row" id="timeline-hours">
<div className="rn-fw-copy rn-fw-md">

## TimelineHours

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">blockSize</h1>
    <Badge color="supa" colorVariant="faded" size="small">number</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>6</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Number of hours per block in a day.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value"><code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">width</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">time</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>


<div className="rn-fw-row" id="timeline-rows">
<div className="rn-fw-copy rn-fw-md">

## TimelineRows

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">index</code>
            <span className="rn-fw-api-value-type">number</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">isOddNumber</code>
            <span className="rn-fw-api-value-type">boolean</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">offsetPx</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">widthPx</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      children
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">React.ReactNode &#124; React.ReactNode[]</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply children to be rendered.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row" id="timeline-row">
<div className="rn-fw-copy rn-fw-md">

## TimelineRow

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      name
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">string</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">A descriptive identifier for the row.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      children
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">React.ReactNode &#124; React.ReactNode[]</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply children to be rendered.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row" id="timeline-events">
<div className="rn-fw-copy rn-fw-md">

## TimelineEvents

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      children
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">React.ReactNode &#124; React.ReactNode[]</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply children to be rendered.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>

<div className="rn-fw-row" id="timeline-event">
<div className="rn-fw-copy rn-fw-md">

## TimelineEvent

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      barColor
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">string</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>ColorSuccess500</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The colour of the bar.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      startDate
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The start date of the event.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      endDate
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">Date</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>-</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">The end date of the event.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">render</h1>
    <Badge color="supa" colorVariant="faded" size="small">Func</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>
        <ul className="rn-fw-api-value-list">
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">startDate</code>
            <span className="rn-fw-api-value-type">Date</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">endDate</code>
            <span className="rn-fw-api-value-type">Date</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">widthPx</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
          <li className="rn-fw-api-value-item">
            <code className="rn-fw-api-value-name">offsetPx</code>
            <span className="rn-fw-api-value-type">string</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply a custom presentation layer.</p>
    </div>
  </div>
</div>

<div className="rn-fw-api">
  <div className="rn-fw-api-header">
    <h1 className="rn-fw-api-title">
      children
      <Badge className="rn_ml-4" color="danger" colorVariant="faded" variant="pill" size="small">Required</Badge>
    </h1>
    <Badge color="supa" colorVariant="faded" size="small">React.ReactNode &#124; React.ReactNode[]</Badge>
  </div>
  <div className="rn-fw-api-body">
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Default Value</div>
      <div className="rn-fw-api-value">
        <code>Function</code>
      </div>
    </div>
    <div className="rn-fw-api-row">
      <div className="rn-fw-api-item">Description</div>
      <p className="rn-fw-api-value">Supply children to be rendered.</p>
    </div>
  </div>
</div>

</div>
<div className="rn-fw-code rn-fw-md">


</div>
</div>


<div className="rn-fw-row rn-fw-row-section" id="roadmap">
<div className="rn-fw-copy rn-fw-md">

## Roadmap

- Migrate to independent package within monorepo
- ~~Adopt [styled-components](https://github.com/styled-components/styled-components) for default presentation~~
- Expose `TimelineSide` render prop
- Add demos to sandbox
- Iterate upon default presentation (user research and design)
- Investigate support for advanced features:
  - ~~Hours display~~
  - Infinite scroll
  - Lazy loading
  - View scaling (micro to macro / hours to years)
  - Drag and drop

</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>

<div className="rn-fw-row" id="contributing">
<div className="rn-fw-copy rn-fw-md">

## Contributing

The [contributing guide](https://github.com/Royal-Navy/design-system/blob/master/docs/contributing.md) resource presents information about our development process.

</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>

<div className="rn-fw-row" id="changelog">
<div className="rn-fw-copy rn-fw-md">

## Changelog

If you have recently updated then read the [release notes](https://github.com/Royal-Navy/design-system/releases).

</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>

<div className="rn-fw-row" id="license">
<div className="rn-fw-copy rn-fw-md">

## License

The Royal Navy Design System is licensed under the [Apache License 2.0](https://github.com/Royal-Navy/design-system/blob/master/LICENSE).

</div>
<div className="rn-fw-code rn-fw-md"></div>
</div>
