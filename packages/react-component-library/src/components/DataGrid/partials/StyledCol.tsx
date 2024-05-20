import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing, color } = selectors

interface StyledColProps {
  $isSortable?: boolean
  $alignment?: 'left' | 'right' | 'center'
  $width?: number
  $isHeaderGroup?: boolean
}

export const StyledCol = styled.th<StyledColProps>`
  position: relative;
  padding: ${spacing('9')} ${spacing('4')} ${spacing('9')} ${spacing('8')};
  width: ${({ $width }) => $width || 'auto'};
  border-bottom: 1px solid ${color('neutral', '200')};
  color: ${color('neutral', '600')};
  font-weight: 700;
  text-align: left;
  text-transform: 'capitalize';
  font-size: ${fontSize('s')};

  > div {
    display: flex;
    align-items: center;
    justify-content: ${({ $alignment }) =>
      $alignment === 'right' ? 'flex-end' : 'space-between'};

    & svg {
      height: 1rem;
      margin-left: ${spacing('2')};
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

  ${({ $isSortable }) =>
    $isSortable &&
    css`
      cursor: pointer;
      user-select: none;

      &:hover {
        svg {
          opacity: 0.75;
        }
      }
    `}
`
