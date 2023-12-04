import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { transparentize } from 'polished'

import { RANGE_SLIDER_HANDLE_COLOR } from '../constants'

const { color } = selectors

export const StyledHandle = styled.div`
  position: absolute;
  transform: translate(-10px, -50%);
  width: 18px;
  height: 18px;
  margin-left: 1px;
  border: none;
  border-radius: 9999px;
  background-color: ${RANGE_SLIDER_HANDLE_COLOR};
  text-align: center;
  transition: box-shadow 0.15s ease-in-out;
  cursor: pointer;
  box-shadow: 1px 1px 2px 0px rgba(000, 000, 000, 0.25);

  &:focus {
    box-shadow: 1px 1px 2px 0px rgba(000, 000, 000, 0.25),
      0px 0px 0px 5px ${transparentize(0.5, color('action', '200'))};
    outline: none;
  }
`
