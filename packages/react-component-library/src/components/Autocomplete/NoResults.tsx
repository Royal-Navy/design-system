import React from 'react'

import { COMPONENT_SIZE, ComponentSizeType } from '../Forms'
import { StyledNoResults } from './partials/StyledNoResults'

export interface NoResultsProps {
  children: string
  size?: ComponentSizeType
}

export const NoResults = ({
  children,
  size = COMPONENT_SIZE.FORMS,
}: NoResultsProps) => (
  <StyledNoResults data-testid="autocomplete-no-results" $size={size}>
    <em>
      No results for<strong>{`\u00A0${children}`}</strong>
    </em>
  </StyledNoResults>
)

NoResults.displayName = 'NoResults'
