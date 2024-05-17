import React from 'react'

import { shadow, spacing } from '@royalnavy/design-tokens'

import styled from 'styled-components'

import {
  StyledDescription,
  StyledHexValue,
  StyledRow,
  StyledSwatch,
  StyledWeight,
} from './partials'
import { getShadowDescription, getShadows } from './utils'

const StyledContainer = styled.div`
  padding-bottom: ${spacing('13')};
`

export const ElevationTable = () => {
  const shadows = getShadows()

  return (
    <StyledContainer>
      {shadows.map((shadowWeight) => {
        return (
          <StyledRow key={shadowWeight}>
            <StyledSwatch $boxShadow={shadow(shadowWeight)} />
            <StyledWeight>{shadowWeight}</StyledWeight>

            <StyledDescription>
              {getShadowDescription(shadowWeight)}
              <StyledHexValue>{shadow(shadowWeight)}</StyledHexValue>
            </StyledDescription>
          </StyledRow>
        )
      })}
    </StyledContainer>
  )
}

export const UsageText = `
import styled from 'styled-components'

import { shadow } from '@royalnavy/design-tokens'

export const StyledPanel = styled.div\`
  box-shadow: \${ shadow('1') })};
\`
`
