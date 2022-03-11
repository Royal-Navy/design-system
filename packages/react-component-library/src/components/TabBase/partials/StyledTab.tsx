import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'

import { StyledTabSetProps } from '../../TabSet/partials/StyledTabSet'

const { color, fontSize, zIndex } = selectors

interface StyledTabProps extends StyledTabSetProps {
  $isActive?: boolean
}

export const ACTIVE_TAB_BORDER = `1px solid ${color('neutral', '300')}`
export const ACTIVE_TAB_HEIGHT = '52px'

function getActiveStyles() {
  return css`
    text-decoration: none;
    background-color: ${color('neutral', 'white')};
    height: ${ACTIVE_TAB_HEIGHT};
    margin-top: 0;
    border-left: ${ACTIVE_TAB_BORDER};
    border-right: ${ACTIVE_TAB_BORDER};
    border-top: ${`6px solid ${color('action', '500')}`};
    z-index: ${zIndex('header', 2)};
  `
}

export const StyledTab = styled.button<StyledTabProps>`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: ${fontSize('base')};
  font-weight: normal;
  text-decoration: underline;

  background-color: ${color('neutral', '100')};

  height: 46px;
  margin-top: 6px;

  border: 1px solid transparent;
  border-top: none;
  border-bottom: none;

  position: relative;
  z-index: ${zIndex('header', 1)};

  padding: 0 24px;

  & > div {
    margin: 0 auto;
  }

  &:focus {
    outline: none;
  }

  * {
    color: ${color('neutral', '600')};
  }

  ${({ $isActive }) => $isActive && getActiveStyles()}
`
