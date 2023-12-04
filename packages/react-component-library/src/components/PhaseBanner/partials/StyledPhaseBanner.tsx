import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledPhaseBanner = styled.div`
  background-color: ${color('action', '100')};
  padding-top: ${spacing('4')};
  padding-bottom: ${spacing('4')};
`
