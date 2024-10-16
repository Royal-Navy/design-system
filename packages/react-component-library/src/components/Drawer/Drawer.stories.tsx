import React from 'react'
import styled from 'styled-components'

import { Meta, StoryFn } from '@storybook/react'
import { color } from '@royalnavy/design-tokens'

import { Drawer } from '.'
import { TextE } from '../Text'

export default {
  component: Drawer,
  title: 'Components/Drawer',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta<typeof Drawer>

const StyledWrapper = styled.div`
  height: 300px;
  background-color: ${color('neutral', '000')};
`

export const Default: StoryFn<typeof Drawer> = (props) => (
  <StyledWrapper>
    <Drawer {...props}>
      <pre css={{ padding: '0 1rem' }}>Arbitrary JSX</pre>
    </Drawer>
  </StyledWrapper>
)

Default.args = {
  isOpen: true,
}

export const WithScrollableContent: StoryFn<typeof Drawer> = (props) => (
  <StyledWrapper>
    <Drawer {...props}>
      <TextE el="h1">Hello World</TextE>
      <TextE>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        facilisis, magna eget tempus ultrices, nulla enim posuere augue, quis
        vehicula magna sapien vel diam. Phasellus orci lectus, ultricies vitae
        fringilla ut, dapibus eget ipsum. Cras viverra hendrerit ex, id
        sollicitudin nibh pulvinar at. Vestibulum facilisis sem in bibendum
        ultricies. Aenean eu lacus ultricies, auctor lacus in, blandit eros.
        Nunc maximus sodales est, ut convallis ipsum facilisis nec. Cras eu
        accumsan massa. Sed tempus nunc vitae vulputate imperdiet. Sed commodo
        feugiat sollicitudin. Cras at commodo turpis. In interdum dolor ut enim
        posuere suscipit. Integer lacus metus, pulvinar at mi varius,
        scelerisque porttitor enim. Quisque luctus scelerisque elit, ut accumsan
        felis hendrerit id.
      </TextE>
    </Drawer>
  </StyledWrapper>
)

WithScrollableContent.args = {
  isOpen: true,
}

WithScrollableContent.storyName = 'With scrollable content'
