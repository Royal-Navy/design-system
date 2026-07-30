import { color, shadow, spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { CardFrame } from '../../CardFrame'
import { NavigationCardColorType } from '../types'
import { StyledChevron } from './StyledChevron'

interface StyledNavigationCardProps {
  $color: NavigationCardColorType
}

export const StyledNavigationCard = styled(
  CardFrame
)<StyledNavigationCardProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${spacing('5')};
  height: 100%;
  padding: ${spacing('6')};
  transition: box-shadow 150ms ease, border-color 150ms ease;

  &:hover,
  &:focus-within {
    border-color: ${({ $color }) => color($color, '600')};
    box-shadow: ${shadow('2')};
  }

  &:hover ${StyledChevron}, &:focus-within ${StyledChevron} {
    transform: translateX(4px);
  }
`
