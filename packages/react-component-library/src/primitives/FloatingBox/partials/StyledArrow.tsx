import styled, { css } from 'styled-components'
import type { Placement } from '@floating-ui/core'

interface StyledArrowProps {
  $placement?: Placement
}

const placementStyleMap = {
  top: css`
    position: absolute;
    bottom: -6px;
    border-width: 0 5px 5px;

    &::before,
    &::after {
      transform: rotate(-180deg);
    }

    &::before {
      z-index: 0;
      top: -5px;
    }

    &::after {
      z-index: 1;
      top: -6px;
    }
  `,
  bottom: css`
    position: absolute;
    top: 0;
    border-width: 0 5px 5px;

    &::before {
      z-index: 0;
      top: -5px;
    }

    &::after {
      z-index: 1;
      top: -6px;
    }
  `,
  left: css`
    position: relative;
    right: -2px;
    border-width: 5px 0 5px 5px;

    &::before,
    &::after {
      transform: rotate(90deg);
      top: unset;
    }

    &::before {
      left: -1px;
    }

    &::after {
      left: 0;
    }
  `,
  right: css`
    position: relative;
    left: -2px;
    border-width: 5px 5px 5px 0;

    &::before,
    &::after {
      transform: rotate(-90deg);
      top: unset;
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
  &::before,
  &::after {
    border-style: solid;
    content: '';
    display: block;
    position: absolute;
    width: 0;
    border-width: 0 5px 5px;
    margin-left: -5px;
  }

  &::before {
    z-index: 0;
    top: -6px;
  }

  &::after {
    z-index: 1;
    top: -5px;
  }

  ${({ $placement }) => $placement && placementStyleMap[$placement]}
`
