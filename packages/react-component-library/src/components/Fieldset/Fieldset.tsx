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
  border: 1px solid transparent;
  padding: unset;
  border-radius: 15px;

  legend {
    padding: ${spacing('10')} 0 ${spacing('8')};
  }

  ${StyledRadioWrapper}, ${StyledCheckboxWrapper} {
    ${StyledCheckbox}, ${StyledRadio} {
      border-radius: unset;
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
      border: 1px solid ${color('danger', '800')};
      box-shadow: inset 0 0 0 1px ${color('danger', '800')},
        0 0 0 2px ${color('danger', '800')};

      ${StyledRadioWrapper},
      ${StyledCheckboxWrapper} {
        ${StyledCheckbox}, ${StyledRadio} {
          border-color: ${color('neutral', '200')};
          box-shadow: unset;
          border-right-color: ${color('danger', '800')};
          border-left-color: ${color('danger', '800')};
        }
      }

      ${StyledRadioWrapper}:first-of-type,
      ${StyledCheckboxWrapper}:first-of-type {
        ${StyledCheckbox}, ${StyledRadio} {
          border-top-color: ${color('danger', '800')};
        }

        &:active,
        &:focus-within {
          border-top-color: ${color('action', '500')};
        }
      }

      ${StyledRadioWrapper}:last-of-type,
      ${StyledCheckboxWrapper}:last-of-type {
        ${StyledCheckbox}, ${StyledRadio} {
          border-bottom-color: ${color('danger', '800')};
        }
      }
    `}
`

export const Fieldset: React.FC<FieldsetProps> = (props) => {
  return <StyledFieldset {...props} />
}

Fieldset.displayName = 'Fieldset'
