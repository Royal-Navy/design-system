import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { RangeSlider } from './index'

export default { component: RangeSlider, title: 'Range Slider' } as Meta

export const Default = (props: any) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider {...props} />
  </div>
)

Default.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tracksLeft: true,
  onChange: (values: ReadonlyArray<number>) => console.log,
  onUpdate: (values: ReadonlyArray<number>) => console.log,
}

export const MultipleHandles = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      mode={2}
      values={[10, 20, 30]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tracksLeft
      tickCount={10}
      thresholds={[40, 60]}
      hasPercentage
      displayUnit="pt"
    />
  </div>
)

MultipleHandles.storyName = 'Multiple handles'

export const SingleThreshold = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tracksLeft
      thresholds={[40]}
    />
  </div>
)

SingleThreshold.storyName = 'Single threshold'

export const DoubleThreshold = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tracksLeft
      thresholds={[40, 60]}
    />
  </div>
)

DoubleThreshold.storyName = 'Double threshold'

export const CustomValueFormatter = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tickCount={4}
      tracksLeft
      formatValue={({ value }) => `£${value.toFixed(2)}`}
    />
  </div>
)

CustomValueFormatter.storyName = 'Custom value formatter'

export const Stepped = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tickCount={4}
      tracksLeft
    />
  </div>
)

Stepped.storyName = 'Stepped'

export const WithIcons = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tickCount={4}
      tracksLeft
      IconLeft={IconBrightnessLow}
      IconRight={IconBrightnessHigh}
    />
  </div>
)

WithIcons.storyName = 'With icons'

export const WithLabels = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      step={2}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tracksLeft
      hasLabels
      tickCount={20}
    />
  </div>
)

WithLabels.storyName = 'With labels'

export const ReversedScale = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      step={2}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tracksRight
      hasLabels
      tickCount={20}
      isReversed
    />
  </div>
)

ReversedScale.storyName = 'Reversed scale'

export const Disabled = () => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      onChange={(values: ReadonlyArray<number>) => console.log}
      onUpdate={(values: ReadonlyArray<number>) => console.log}
      tracksLeft
      isDisabled
    />
  </div>
)

Disabled.storyName = 'Disabled'
