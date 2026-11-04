import { styled, css } from 'styled-components'
import { BasePlacement } from '@popperjs/core'

interface StyledArrowProps {
  $placement?: BasePlacement
}

const placementStyleMap = {
  bottom: css`
    &::before {
      border-width: 0 6px 6px;
      top: -7px;
    }

    &::after {
      border-width: 0 5px 5px;
      top: -5px;
    }
  `,
  top: css`
    bottom: -6px;

    &::before {
      border-width: 6px 6px 0;
      z-index: 0;
      top: -6px;
    }

    &::after {
      border-width: 5px 5px 0;
      z-index: 1;
      top: -6px;
    }
  `,
  left: css`
    right: -2px;

    &::before,
    &::after {
      border-width: 0 5px 5px;
      margin-left: -5px;
      transform: rotate(90deg);
    }

    &::before {
      left: 1px;
    }

    &::after {
      left: 0;
    }
  `,
  right: css`
    left: -2px;

    &::before,
    &::after {
      border-width: 0 5px 5px;
      margin-left: -5px;
      transform: rotate(-90deg);
    }

    &::before {
      left: -1px;
    }

    &::after {
      left: 0;
    }
  `,
}

export const StyledArrow = styled.div<StyledArrowProps>`
  position: relative;

  &::before,
  &::after {
    border-style: solid;
    content: '';
    display: block;
    position: absolute;
    width: 0;
  }

  &::before {
    z-index: 0;
    margin-left: -6px;
  }

  &::after {
    z-index: 1;
    margin-left: -5px;
  }

  ${({ $placement = 'bottom' }) => placementStyleMap[$placement]}
`
