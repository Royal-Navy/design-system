import React from 'react'
import styled from 'styled-components'

import { selectors, ShadowWeight } from '@royalnavy/design-tokens'

const { color, spacing, shadow } = selectors

export const StyledPanels = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 1fr);
  gap: ${spacing('8')};
`

const StyledPanel = styled.div<{ $shadowWeight: ShadowWeight }>`
  border: solid ${spacing('px')} ${color('neutral', '100')};
  padding: ${spacing('4')};
  box-shadow: ${(props) => shadow(props.$shadowWeight)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 5px;
`

type ElevatedPanelProps = {
  shadowWeight: ShadowWeight
}

export const ElevatedPanel = (props: ElevatedPanelProps) => {
  const { shadowWeight } = props
  return (
    <StyledPanel $shadowWeight={shadowWeight}>
      <span>Shadow:{shadowWeight}</span>

      <pre>
        <code>shadow(&apos;{shadowWeight}&apos;)</code>
      </pre>
    </StyledPanel>
  )
}
