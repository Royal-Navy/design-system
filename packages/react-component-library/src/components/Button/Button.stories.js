import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

const stories = storiesOf('Button', module)

const TriangleDown = () => (
  <svg
    width="11px"
    height="8px"
    viewBox="0 0 11 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-2689.000000, -331.000000)" fill="#253b5b">
        <path
          d="M2695.32404,332.198606 L2699.46151,338.216736 C2699.61795,338.444288 2699.5603,338.755578 2699.33275,338.912021 C2699.2494,338.969324 2699.15063,339 2699.04948,339 L2689.95052,339 C2689.67437,339 2689.45052,338.776142 2689.45052,338.5 C2689.45052,338.398853 2689.48119,338.300085 2689.53849,338.216736 L2693.67596,332.198606 C2693.98884,331.743501 2694.61142,331.628208 2695.06653,331.941093 C2695.1674,332.010446 2695.25469,332.09773 2695.32404,332.198606 Z"
          transform="translate(2694.500000, 335.000000) scale(1, -1) translate(-2694.500000, -335.000000) "
        />
      </g>
    </g>
  </svg>
)

const TriangleUp = () => (
  <svg
    width="11px"
    height="8px"
    viewBox="0 0 11 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-3365.000000, -331.000000)" fill="#253b5b">
        <path d="M3371.32404,332.198606 L3375.46151,338.216736 C3375.61795,338.444288 3375.5603,338.755578 3375.33275,338.912021 C3375.2494,338.969324 3375.15063,339 3375.04948,339 L3365.95052,339 C3365.67437,339 3365.45052,338.776142 3365.45052,338.5 C3365.45052,338.398853 3365.48119,338.300085 3365.53849,338.216736 L3369.67596,332.198606 C3369.98884,331.743501 3370.61142,331.628208 3371.06653,331.941093 C3371.1674,332.010446 3371.25469,332.09773 3371.32404,332.198606 Z" />
      </g>
    </g>
  </svg>
)

stories.addDecorator(withKnobs)

stories.add('Default (Solid)', () => (
  <div>
    <Button onClick={action('Clicked primary')} state="primary">
      {text('Primary text', 'Primary')}
    </Button>
    <Button onClick={action('Clicked secondary')} state="secondary">
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button onClick={action('Clicked tertiary')} state="tertiary">
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <Button onClick={action('Clicked danger')} state="danger">
      {text('Danger text', 'Danger')}
    </Button>
    <Button onClick={action('Clicked warning')} state="warning">
      {text('Warning text', 'Warning')}
    </Button>

    <Button onClick={action('Clicked success')} state="success">
      {text('Success text', 'Success')}
    </Button>
  </div>
))

stories.add('Outline', () => (
  <div>
    <Button
      onClick={action('Clicked primary')}
      state="primary"
      variation="outline"
    >
      {text('Primary text', 'Primary')}
    </Button>
    <Button
      onClick={action('Clicked secondary')}
      state="secondary"
      variation="outline"
    >
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button
      onClick={action('Clicked tertiary')}
      state="tertiary"
      variation="outline"
    >
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <Button
      onClick={action('Clicked danger')}
      state="danger"
      variation="outline"
    >
      {text('Danger text', 'Danger')}
    </Button>
    <Button
      onClick={action('Clicked warning')}
      state="warning"
      variation="outline"
    >
      {text('Warning text', 'Warning')}
    </Button>

    <Button
      onClick={action('Clicked success')}
      state="success"
      variation="outline"
    >
      {text('Success text', 'Success')}
    </Button>
  </div>
))

stories.add('Plain', () => (
  <div>
    <Button
      onClick={action('Clicked primary')}
      state="primary"
      variation="plain"
    >
      {text('Primary text', 'Primary')}
    </Button>
    <Button
      onClick={action('Clicked secondary')}
      state="secondary"
      variation="plain"
    >
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button
      onClick={action('Clicked tertiary')}
      state="tertiary"
      variation="plain"
    >
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <Button onClick={action('Clicked danger')} state="danger" variation="plain">
      {text('Danger text', 'Danger')}
    </Button>
    <Button
      onClick={action('Clicked warning')}
      state="warning"
      variation="plain"
    >
      {text('Warning text', 'Warning')}
    </Button>

    <Button
      onClick={action('Clicked success')}
      state="success"
      variation="plain"
    >
      {text('Success text', 'Success')}
    </Button>
    <hr />
    <Button
      onClick={action('Clicked primary')}
      state="primary"
      variation="plain"
      className="is-active"
    >
      {text('Primary text', 'Active Primary')}
    </Button>
  </div>
))

stories.add('Icon', () => (
  <div>
    <Button
      onClick={action('Clicked primary')}
      state="primary"
      variation="plain"
      icon={<TriangleDown />}
    >
      {text('Primary text', 'Primary')}
    </Button>
    <Button
      className="is-active"
      onClick={action('Clicked primary')}
      state="primary"
      variation="plain"
      icon={<TriangleUp />}
    >
      {text('Primary text', 'Primary active')}
    </Button>
  </div>
))
