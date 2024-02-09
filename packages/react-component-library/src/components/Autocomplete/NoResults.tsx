import React from 'react'

import { StyledNoResults } from './partials/StyledNoResults'

export const NoResults = ({ children }) => (
  <StyledNoResults data-testid="autocomplete-no-results">
    <em>
      No results for<strong>{`\u00A0${children}`}</strong>
    </em>
  </StyledNoResults>
)

NoResults.displayName = 'NoResults'
