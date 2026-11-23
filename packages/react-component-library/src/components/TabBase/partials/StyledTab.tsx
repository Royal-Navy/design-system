import { color, fontSize, spacing, zIndex } from '@royalnavy/design-tokens'
import { styled, css } from 'styled-components'

import { StyledTabSetProps } from '../../TabSet/partials/StyledTabSet'
import { TAB_VARIANT } from '../constants'
import { TabVariantType } from '../types'

export interface StyledTabProps extends StyledTabSetProps {
  $isActive?: boolean
  $variant?: TabVariantType
}

export const ACTIVE_TAB_BORDER = `1px solid ${color('neutral', '300')}`
export const ACTIVE_TAB_HEIGHT = '52px'
export const UNDERLINE_TAB_RULE = `inset 0 -1px 0 ${color('neutral', '200')}`
export const UNDERLINE_TAB_ACTIVE_BORDER = `3px solid ${color('action', '700')}`

function getBoxedActiveStyles() {
  return css`
    text-decoration: none;
    font-weight: bold;
    background-color: ${color('neutral', 'white')};
    height: ${ACTIVE_TAB_HEIGHT};
    margin-top: 0;
    border-left: ${ACTIVE_TAB_BORDER};
    border-right: ${ACTIVE_TAB_BORDER};
    border-top: ${`6px solid ${color('action', '500')}`};
    z-index: ${zIndex('header', 2)};
  `
}

function getBoxedStyles($isActive?: boolean) {
  return css`
    font-weight: normal;
    text-decoration: underline;

    background-color: ${color('neutral', '100')};

    height: 46px;
    margin-top: 6px;

    border: 1px solid transparent;
    border-top: none;
    border-bottom: none;

    padding: 0 24px;

    * {
      color: ${color('neutral', '600')};
    }

    ${$isActive && getBoxedActiveStyles()}
  `
}

function getUnderlineActiveStyles() {
  return css`
    font-weight: bold;
    border-bottom: ${UNDERLINE_TAB_ACTIVE_BORDER};

    &,
    * {
      color: ${color('action', '700')};
    }
  `
}

function getUnderlineStyles($isActive?: boolean) {
  return css`
    font-weight: normal;
    text-decoration: none;

    background-color: transparent;

    border: 1px solid transparent;
    border-bottom: 3px solid transparent;

    height: ${ACTIVE_TAB_HEIGHT};
    padding: ${spacing('3')} ${spacing('8')} 0;

    &,
    * {
      color: ${color('neutral', '600')};
    }

    ${$isActive && getUnderlineActiveStyles()}
  `
}

export const StyledTab = styled.button<StyledTabProps>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-size: ${fontSize('base')};

  position: relative;
  z-index: ${zIndex('header', 1)};

  & > div {
    margin: 0 auto;
  }

  ${({ $isActive, $variant }) =>
    $variant === TAB_VARIANT.UNDERLINE
      ? getUnderlineStyles($isActive)
      : getBoxedStyles($isActive)}
`
