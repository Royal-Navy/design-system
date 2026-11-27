import { styled, css } from 'styled-components'
import { animation, color } from '@royalnavy/design-tokens'

import { COMPONENT_SIZE, ComponentSizeType } from '../../Forms'
import { StyledInput } from './StyledInput'

const TRACK_STYLES = {
  [COMPONENT_SIZE.FORMS]: css`
    --thumb-size: 20px;
    width: 52px;
  `,
  [COMPONENT_SIZE.SMALL]: css`
    --thumb-size: 12px;
    width: 36px;
  `,
}

interface StyledTrackProps {
  $size: ComponentSizeType
}

export const StyledTrack = styled.span<StyledTrackProps>`
  ${({ $size }) => TRACK_STYLES[$size]}

  box-sizing: border-box;
  flex-shrink: 0;
  padding: 3px;
  color: ${color('neutral', '300')};
  background-color: ${color('neutral', 'white')};
  border: 1px solid currentColor;
  border-radius: 14px;
  pointer-events: none;
  transition: background-color ${animation('default')};

  &::after {
    content: '';
    display: block;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: currentColor;
    /* Keeps the thumb visible in forced-colors mode */
    outline: 1px solid transparent;
    transition: margin-left ${animation('default')};
  }

  ${StyledInput}:checked ~ & {
    color: ${color('action', '500')};
    background-color: currentColor;

    &::after {
      margin-left: calc(100% - var(--thumb-size));
      background-color: ${color('neutral', 'white')};
    }
  }

  ${StyledInput}:hover ~ & {
    border-color: ${color('action', '500')};
  }

  ${StyledInput}[aria-invalid='true'] ~ & {
    border-color: ${color('danger', '800')};
    box-shadow: 0 0 0 2px ${color('danger', '800')};
  }

  ${StyledInput}:focus-visible ~ & {
    border-color: ${color('action', '500')};
    box-shadow: 0 0 0 2px ${color('action', '500')},
      0 0 0 5px ${color('action', '100')};
    outline: 2px solid transparent;
  }

  ${StyledInput}[aria-invalid='true']:focus-visible ~ & {
    border-color: ${color('danger', '800')};
    box-shadow: 0 0 0 2px ${color('danger', '800')},
      0 0 0 4px ${color('action', '500')};
  }

  ${StyledInput}:disabled ~ & {
    color: ${color('neutral', '200')};
    border-color: currentColor;
    box-shadow: none;
  }

  @media (forced-colors: active) {
    &::after {
      forced-color-adjust: none;
    }

    ${StyledInput}:checked ~ & {
      border-color: Highlight;

      &::after {
        background-color: Highlight;
      }
    }

    ${StyledInput}:checked:disabled ~ & {
      border-color: GrayText;

      &::after {
        background-color: GrayText;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &::after {
      transition: none;
    }
  }
`
