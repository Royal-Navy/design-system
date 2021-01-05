import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledBreadcrumbsItem } from './StyledBreadcrumbsItem'

const { fontSize } = selectors

export const StyledBreadcrumbsList = styled.ol`
  display: flex;
  font-size: ${fontSize('base')};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;

  ${StyledBreadcrumbsItem}:hover ~ ${StyledBreadcrumbsItem} {
    opacity: 0.2;
  }
`
