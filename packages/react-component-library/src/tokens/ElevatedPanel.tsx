import React from 'react'

import {
  getShadowDescription,
  getShadows,
  selectors,
} from '@royalnavy/design-tokens'

import styled from 'styled-components'

import {
  StyledDescription,
  StyledHexValue,
  StyledRow,
  StyledSwatch,
  StyledWeight,
} from './partials'

const { shadow, spacing } = selectors

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

import { selectors } from '@royalnavy/design-tokens'

const { shadow } = selectors

export const StyledPanel = styled.div\`
  box-shadow: \${ shadow('1') })};
\`
`
