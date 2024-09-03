import styled, { css } from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

interface StyledColProps {
  $isSortable?: boolean
  $alignment?: 'left' | 'right' | 'center'
  $width?: number
  $isHeaderGroup?: boolean
}

export const StyledCol = styled.th<StyledColProps>`
  position: relative;
  padding: ${spacing('9')} ${spacing('4')} ${spacing('9')} ${spacing('8')};
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
  border-bottom: 1px solid ${color('neutral', '200')};
  color: ${color('neutral', '600')};
  font-weight: 700;
  text-align: left;
  text-transform: capitalize;
  font-size: ${fontSize('s')};

  > div {
    display: flex;
    align-items: center;
    justify-content: ${({ $alignment }) =>
      $alignment === 'right' ? 'flex-end' : 'space-between'};

    > span {
      margin-right: auto;
    }

    & svg {
      height: 1rem;
    }
  }

  &:not(:last-of-type) > div::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background: ${color('neutral', '200')};
  }

  ${({ $isHeaderGroup }) =>
    $isHeaderGroup &&
    css`
      text-transform: uppercase;
      font-size: ${fontSize('m')};

      &:not(:last-of-type) > div::after {
        top: 100%;
        height: 80px;
      }
    `}
`
