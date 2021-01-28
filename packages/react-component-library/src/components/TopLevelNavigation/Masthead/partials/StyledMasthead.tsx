import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

interface StyledMastheadProps {
  $showNotifications: boolean
  $showSearch: boolean
}

export const StyledMastHead = styled.div<StyledMastheadProps>`
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: ${color('neutral', 'white')};
`
