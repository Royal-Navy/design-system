import { position } from 'polished'
import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledCheckbox } from './StyledCheckbox'

const { animation, color } = selectors

export const StyledCheckmark = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '200')};
  border-radius: 3px;

  &::before {
    content: '';
    ${position('absolute', 0, 0, 0, 0)};
    border-radius: 2px;
  }

  &::after {
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMywgNCkiIGQ9Ik04LjgyMiAwYzEuMDUtLjAyNyAxLjU3NCAxLjMwNC44MjcgMi4wOEw0LjI5OCA3Ljc0YS44My44MyAwIDAgMS0xLjIwNyAwTC4zNzYgNC44NTVDLS43NTIgMy43MTguOTE0IDEuOTU2IDEuOTkgMy4xNDlsMS41MDggMS41OTVjLjEwNS4xMS4yODguMTEuNDA3IDBsNC4xMy00LjM3QTEuMSAxLjEgMCAwIDEgOC44MjMgMHoiCiAgICAgICAgICBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    border-radius: 2px;
    color: ${color('neutral', 'white')};
  }

  ${StyledCheckbox}:hover &, ${StyledCheckbox}:active & {
    &::before {
      box-shadow: 0 0 0 2px ${color('action', '500')};
      transition: all ${animation('default')};
    }
  }

  ${StyledCheckbox} input:checked ~ & {
    background-color: ${color('action', '500')};
    border: 1px solid ${color('action', '500')};
    text-align: center;

    &::after {
      display: block;
    }
  }

  ${StyledCheckbox} input:disabled ~ & {
    background-color: ${color('neutral', '200')};
    border-color: ${color('neutral', '200')};

    &::before {
      box-shadow: none;
    }
  }
`
