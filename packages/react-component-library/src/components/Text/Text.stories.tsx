import React from 'react'
import styled, { css } from 'styled-components'

import { Meta, StoryFn } from '@storybook/react'
import { textAlignments, TextE } from './Text'
import { allowedElements } from './textStyles'

export default {
  component: TextE,
  title: 'Experimental/Text',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    el: {
      control: 'select',
      options: Object.values(allowedElements),
    },
    align: {
      control: 'select',
      options: Object.keys(textAlignments),
    },
    color: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
    showBaseline: {
      control: 'boolean',
      description: 'Show vertical text baseline',
    },
  },
} as Meta<typeof TextE>

const StyledContainerWithBaseline = styled.div<{ $showBaseline: boolean }>`
  ${({ $showBaseline }) =>
    $showBaseline &&
    css`
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpUUqHdpBxCFDdbKLSnGsVShChVArtOpgcukXNGlJUlwcBdeCgx+LVQcXZ10dXAVB8APE2cFJ0UVK/F9SaBHjwXE/3t173L0DhHaNaeZAEtB0y8imU2K+sCoGXhFECGEkEJGZ2ZiTpAw8x9c9fHy9i/Ms73N/jmG1aDLAJxInWcOwiDeIE5tWg/M+cZRVZJX4nHjSoAsSP3JdcfmNc9lhgWdGjVx2njhKLJb7WOljVjE04hnimKrplC/kXVY5b3HWak3WvSd/YaioryxzneYY0ljEEiSIUNBEFTVYiNOqk2IiS/spD/+o45fIpZCrCkaOBdShQXb84H/wu1uzND3lJoVSwOCLbX+MA4FdoNOy7e9j2+6cAP5n4Erv+ettYPaT9FZPix0B4W3g4rqnKXvA5Q4w8tSQDdmR/DSFUgl4P6NvKgCRW2Boze2tu4/TByBHXWVugINDYKJM2ese7w729/bvmW5/P6uXcr30vz46AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AgMEAEETjWRHgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAQSURBVAjXY2CgP7h79+5/AAk8A5e5uzpCAAAAAElFTkSuQmCC');
    `}

  margin: 0 auto;
  max-width: 50ch;

  & p + p {
    margin-block-start: 1.5rem;
  }
`

export const Default: StoryFn<typeof Text> = (props) => (
  <StyledContainerWithBaseline $showBaseline={props.showBaseline}>
    <TextE {...props} />
    <TextE {...props} />
  </StyledContainerWithBaseline>
)

Default.args = {
  children: `Paragraph text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean euismod bibendum laoreet.
Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
Proin sodales pulvinar sic tempor.`,
  showBaseline: true,
  wordWrap: true,
}
