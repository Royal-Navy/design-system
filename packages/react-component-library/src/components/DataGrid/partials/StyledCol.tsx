import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { fontSize, spacing, color } = selectors

interface StyledColProps {
  $isSortable?: boolean
  $alignment?: 'left' | 'right' | 'center'
  $width?: number
}

export const StyledCol = styled.th<StyledColProps>`
  position: relative;
  padding: ${spacing('9')} ${spacing('4')} ${spacing('9')} ${spacing('8')};
  width: ${({ $width }) => $width || 'auto'};
  text-align: left;
  font-size: ${fontSize('s')};
  color: ${color('neutral', '600')};
  font-weight: 600;
  text-transform: capitalize;
  border-bottom: 1px solid ${color('neutral', '200')};

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
