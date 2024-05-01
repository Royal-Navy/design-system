import React from 'react'

import {
  getShadowDescription,
  getShadows,
  selectors,
} from '@royalnavy/design-tokens'

import {
  StyledDescription,
  StyledHexValue,
  StyledRow,
  StyledSwatch,
  StyledWeight,
} from './partials'

const { shadow } = selectors

export const ElevationTable = () => {
  const shadows = getShadows()

  return (
    <>
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
    </>
  )
}
