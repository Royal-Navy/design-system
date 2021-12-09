import React from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledCheckboxWrapper } from '../CheckboxE/partials/StyledCheckboxWrapper'
import { StyledCheckbox } from '../CheckboxE/partials/StyledCheckbox'
import { StyledRadioWrapper } from '../RadioE/partials/StyledRadioWrapper'
import { StyledRadio } from '../RadioE/partials/StyledRadio'

export interface StyledFieldsetProps {
  $isInvalid?: boolean
}

export interface FieldsetProps extends ComponentWithClass {
  isInvalid?: boolean
}

const { color, spacing } = selectors

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  display: inline-block;
  position: relative;
  padding: 0;
  border: none;
  border-radius: 15px;

  legend {
    padding: ${spacing('10')} 0 ${spacing('8')};
  }

  ${StyledRadioWrapper}, ${StyledCheckboxWrapper} {
    margin-top: -1px;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ${StyledRadioWrapper}, ${StyledCheckboxWrapper} {
    ${StyledCheckbox}, ${StyledRadio} {
      border-radius: 0;
      border-bottom-width: 1px;
      border-bottom-color: transparent;

      &:active,
      &:focus-within {
        z-index: 1;
        border-color: ${color('action', '500')};
        box-shadow: 0 0 0 2px ${color('action', '500')},
          0 0 0 5px ${color('action', '100')};
      }
    }
  }

  ${StyledRadioWrapper}:first-of-type, ${StyledCheckboxWrapper}:first-of-type {
    ${StyledCheckbox}, ${StyledRadio} {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }

  ${StyledRadioWrapper}:last-of-type, ${StyledCheckboxWrapper}:last-of-type {
    ${StyledCheckbox}, ${StyledRadio} {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      border-bottom-color: ${color('neutral', '200')};

      &:active,
      &:focus-within {
        border-color: ${color('action', '500')};
        box-shadow: 0 0 0 2px ${color('action', '500')},
          0 0 0 5px ${color('action', '100')};
      }
    }
  }

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      &::after {
        box-shadow: inset 0 0 0 1px ${color('danger', '800')},
          0 0 0 2px ${color('danger', '800')};
        border-radius: 15px;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
      }

      ${StyledRadioWrapper},
      ${StyledCheckboxWrapper} {
        ${StyledCheckbox}, ${StyledRadio} {
          border-color: ${color('neutral', '200')};
          box-shadow: none;
          border-right-color: transparent;
          border-left-color: transparent;
        }
      }

      ${StyledRadioWrapper}:first-of-type,
      ${StyledCheckboxWrapper}:first-of-type {
        ${StyledCheckbox}, ${StyledRadio} {
          border-top-color: transparent;

          &:active,
          &:focus-within {
            border-top-color: ${color('action', '500')};
          }
        }
      }

      ${StyledRadioWrapper}:last-of-type,
      ${StyledCheckboxWrapper}:last-of-type {
        ${StyledCheckbox}, ${StyledRadio} {
          border-bottom-color: transparent;

          &:active,
          &:focus-within {
            border-bottom-color: ${color('action', '500')};
          }
        }
      }
    `}
`

export const Fieldset: React.FC<FieldsetProps> = ({ isInvalid, ...rest }) => {
  return <StyledFieldset $isInvalid={isInvalid} {...rest} />
}

Fieldset.displayName = 'Fieldset'
