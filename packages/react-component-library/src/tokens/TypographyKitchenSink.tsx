import React from 'react'
import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'
import { Text } from '../components/Text'
import { Group } from '../components/Group'
import { Logo } from '../components/TopLevelNavigation/Masthead/Logo'

const StyledContainer = styled.div`
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpUUqHdpBxCFDdbKLSnGsVShChVArtOpgcukXNGlJUlwcBdeCgx+LVQcXZ10dXAVB8APE2cFJ0UVK/F9SaBHjwXE/3t173L0DhHaNaeZAEtB0y8imU2K+sCoGXhFECGEkEJGZ2ZiTpAw8x9c9fHy9i/Ms73N/jmG1aDLAJxInWcOwiDeIE5tWg/M+cZRVZJX4nHjSoAsSP3JdcfmNc9lhgWdGjVx2njhKLJb7WOljVjE04hnimKrplC/kXVY5b3HWak3WvSd/YaioryxzneYY0ljEEiSIUNBEFTVYiNOqk2IiS/spD/+o45fIpZCrCkaOBdShQXb84H/wu1uzND3lJoVSwOCLbX+MA4FdoNOy7e9j2+6cAP5n4Erv+ettYPaT9FZPix0B4W3g4rqnKXvA5Q4w8tSQDdmR/DSFUgl4P6NvKgCRW2Boze2tu4/TByBHXWVugINDYKJM2ese7w729/bvmW5/P6uXcr30vz46AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AgMEAEETjWRHgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAQSURBVAjXY2CgP7h79+5/AAk8A5e5uzpCAAAAAElFTkSuQmCC');
`

const StyledTextContainer = styled.div`
  overflow: hidden;
`

export const KitchenSink = () => {
  return (
    <>
      <Text el="h1">
        <Logo /> Typography
      </Text>
      <StyledContainer>
        <Text>
          This document demonstrates how to use the{' '}
          <Text el="code">&lt;Text&gt;</Text> component to create consistent
          blocks of content within your{' '}
          <Text color={color('action', '700')} el="span">
            Royal Navy Design System
          </Text>
          &nbsp; application. Notice how the different font sizes align to the
          vertical baseline
        </Text>

        <Text el="h2" color={color('neutral', '700')}>
          Multi columnar text panels using a &lt;Group&gt; component
        </Text>
        <Group gap="8" grow align="start">
          <StyledTextContainer>
            <Text wordWrap={false} el="h2">
              Paragraph text (default settings)
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque facilisis, magna eget tempus ultrices, nulla enim
              posuere augue, quis vehicula magna sapien vel diam. Phasellus orci
              lectus, ultricies vitae fringilla ut, dapibus eget ipsum. Cras
              viverra hendrerit ex, id sollicitudin nibh pulvinar at. Vestibulum
              facilisis sem in bibendum ultricies.{' '}
              <Text backgroundColor={color('warning', '200')} el="span">
                It is possible to nest and individually style the components
              </Text>{' '}
              Aenean eu lacus ultricies, auctor lacus in, blandit eros. Nunc
              maximus sodales est, ut convallis ipsum facilisis nec. Cras eu
              accumsan massa. Sed tempus nunc vitae vulputate imperdiet. Sed
              commodo feugiat sollicitudin. Cras at commodo turpis. In interdum
              dolor ut enim posuere suscipit. Integer lacus metus, pulvinar at
              mi varius, scelerisque porttitor enim. Quisque luctus scelerisque
              elit, ut accumsan felis hendrerit id.
            </Text>
          </StyledTextContainer>
          <StyledTextContainer>
            <Text wordWrap={false} el="h2">
              Small text variant
            </Text>
            <Text variant="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque facilisis, magna eget tempus ultrices, nulla enim
              posuere augue, quis vehicula magna sapien vel diam. Phasellus orci
              lectus, ultricies vitae fringilla ut, dapibus eget ipsum. Cras
              viverra hendrerit ex, id sollicitudin nibh pulvinar at. Vestibulum
              facilisis sem in bibendum ultricies.{' '}
              <Text
                el="span"
                variant="small"
                backgroundColor={color('supb', '100')}
              >
                Which allows us to mix styles (if we really must)
              </Text>{' '}
              Aenean eu lacus ultricies, auctor lacus in, blandit eros. Nunc
              maximus sodales est, ut convallis ipsum facilisis nec. Cras eu
              accumsan massa. Sed tempus nunc vitae vulputate imperdiet. Sed
              commodo feugiat sollicitudin. Cras at commodo turpis. In interdum
              dolor ut enim posuere suscipit. Integer lacus metus, pulvinar at
              mi varius, scelerisque porttitor enim. Quisque luctus scelerisque
              elit, ut accumsan felis hendrerit id.
            </Text>
          </StyledTextContainer>
        </Group>

        <Text el="h2">Justified text</Text>
        <Group grow gap="8" align="start">
          <StyledTextContainer>
            <Text wordWrap={false} el="h2">
              Paragraph text (default settings)
            </Text>
            <Text align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque facilisis, magna eget tempus ultrices, nulla enim
              posuere augue, quis vehicula magna sapien vel diam. Phasellus orci
              lectus, ultricies vitae fringilla ut, dapibus eget ipsum. Cras
              viverra hendrerit ex, id sollicitudin nibh pulvinar at. Vestibulum
              facilisis sem in bibendum ultricies. Aenean eu lacus ultricies,
              auctor lacus in, blandit eros. Nunc maximus sodales est, ut
              convallis ipsum facilisis nec. Cras eu accumsan massa. Sed tempus
              nunc vitae vulputate imperdiet. Sed commodo feugiat sollicitudin.
              Cras at commodo turpis. In interdum dolor ut enim posuere
              suscipit. Integer lacus metus, pulvinar at mi varius, scelerisque
              porttitor enim. Quisque luctus scelerisque elit, ut accumsan felis
              hendrerit id.
            </Text>
          </StyledTextContainer>
          <StyledTextContainer>
            <Text wordWrap={false} el="h2">
              Small text variant
            </Text>
            <Text align="justify" variant="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque facilisis, magna eget tempus ultrices, nulla enim
              posuere augue, quis vehicula magna sapien vel diam. Phasellus orci
              lectus, ultricies vitae fringilla ut, dapibus eget ipsum. Cras
              viverra hendrerit ex, id sollicitudin nibh pulvinar at. Vestibulum
              facilisis sem in bibendum ultricies. Aenean eu lacus ultricies,
              auctor lacus in, blandit eros. Nunc maximus sodales est, ut
              convallis ipsum facilisis nec. Cras eu accumsan massa. Sed tempus
              nunc vitae vulputate imperdiet. Sed commodo feugiat sollicitudin.
              Cras at commodo turpis. In interdum dolor ut enim posuere
              suscipit. Integer lacus metus, pulvinar at mi varius, scelerisque
              porttitor enim. Quisque luctus scelerisque elit, ut accumsan felis
              hendrerit id.
            </Text>
          </StyledTextContainer>
        </Group>
        <Text variant="display" el="h1">
          Display text
        </Text>
        <Text variant="display">
          For use on display screens or signage. Not all elements are available
        </Text>
      </StyledContainer>
    </>
  )
}
