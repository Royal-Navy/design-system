import React from 'react'

import { StyledNoResults } from './partials/StyledNoResults'

export interface NoResultsProps {
  children: string
}

export const NoResults = ({ children }: NoResultsProps) => (
  <StyledNoResults data-testid="autocomplete-no-results">
    <em>
      No results for<strong>{`\u00A0${children}`}</strong>
    </em>
  </StyledNoResults>
)

NoResults.displayName = 'NoResults'
