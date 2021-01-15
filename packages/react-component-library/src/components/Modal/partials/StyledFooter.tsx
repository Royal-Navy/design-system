import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, mq, spacing } = selectors

interface StyledFooterProps {
  $hasTertiaryButton: boolean
}

export const StyledFooter = styled.footer<StyledFooterProps>`
  background-color: ${color('neutral', 'white')};
  display: flex;
  justify-content: ${({ $hasTertiaryButton }) =>
    $hasTertiaryButton ? 'space-between' : 'flex-end'};
  width: 100%;
  padding: ${spacing('8')};
  flex-direction: column-reverse;
  border-top: 1px solid ${color('neutral', '100')};

  ${mq({ gte: 'xs' })`
    flex-direction: row;
  `}
`
