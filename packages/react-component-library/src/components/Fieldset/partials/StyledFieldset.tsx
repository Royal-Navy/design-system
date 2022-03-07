import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledWrapper } from '../../CheckboxRadioBase/partials/StyledWrapper'
import { StyledCheckbox } from '../../Checkbox/partials/StyledCheckbox'
import { StyledRadio } from '../../Radio/partials/StyledRadio'
import { StyledField } from '../../Field/partials/StyledField'
import { FieldsetType } from '../Fieldset'

export interface StyledFieldsetProps {
  $isInvalid?: boolean
  $type: FieldsetType
}

const { color, spacing } = selectors

export const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  padding: 0 ${spacing('8')};
  margin: ${spacing('8')} 0;
  border: none;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }

  & + & {
    border-left: 1px solid ${color('neutral', '100')};
  }

  ${StyledField} {
    margin: 6px 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${({ $type }) =>
    $type === 'block' &&
    `
    &&& {
      display: flex;
      padding: 0;
      border: none;
      margin: 32px 0;
    }
  `}

  ${StyledWrapper} {
    margin-top: -1px;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ${StyledWrapper} {
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

  ${StyledWrapper}:first-of-type {
    ${StyledCheckbox}, ${StyledRadio} {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }

  ${StyledWrapper}:last-of-type {
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

      ${StyledWrapper} {
        ${StyledCheckbox}, ${StyledRadio} {
          border-color: ${color('neutral', '200')};
          box-shadow: none;
          border-right-color: transparent;
          border-left-color: transparent;
        }
      }

      ${StyledWrapper}:first-of-type {
        ${StyledCheckbox}, ${StyledRadio} {
          border-top-color: transparent;

          &:active,
          &:focus-within {
            border-top-color: ${color('action', '500')};
          }
        }
      }

      ${StyledWrapper}:last-of-type {
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
