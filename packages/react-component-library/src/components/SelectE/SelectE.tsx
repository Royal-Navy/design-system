import React, { useState } from 'react'
import Downshift from 'downshift'

import { ArrowButton } from './ArrowButton'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'
import { SelectEOptionProps } from './SelectEOption'
import { StyledInlineButtons } from './partials/StyledInlineButtons'
import { StyledInput } from './partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInputE/partials/StyledLabel'
import { StyledOptions } from './partials/StyledOptions'
import { StyledOptionsWrapper } from './partials/StyledOptionsWrapper'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledSelect } from './partials/StyledSelect'
import { StyledTextInput } from './partials/StyledTextInput'

type SelectChildType =
  | React.ReactElement<SelectEOptionProps>
  | React.ReactFragment
  | false
  | null
  | undefined

type SelectChildrenType = SelectChildType | SelectChildType[]

export interface SelectEProps extends ComponentWithClass {
  /**
   * Collection of options to display within the Select.
   */
  children: SelectChildType | SelectChildType[]
  /**
   * Optional HTML `id` attribute to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether the component is invalid or not.
   */
  isInvalid?: boolean
  /**
   * Text label to display within the component.
   */
  label: string
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (value: string) => void
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string
}

function getChildBy(
  children: SelectChildrenType,
  propName: string,
  value: string
): React.ReactNode {
  return React.Children.toArray(children).find((child: React.ReactNode) => {
    return React.isValidElement(child) && child.props[propName] === value
  })
}

function getSelectedValue(children: SelectChildrenType, value: string) {
  const child = getChildBy(children, 'value', value)
  return (child as React.ReactElement)?.props?.children
}

export const SelectE: React.FC<SelectEProps> = ({
  children,
  id = getId('select'),
  isDisabled,
  isInvalid,
  label,
  onChange,
  value,
  ...rest
}) => {
  const [hasHover, setHasHover] = useState<boolean>(false)
  const labelId = getId('label')

  return (
    <Downshift
      onChange={(selection) => {
        if (onChange) {
          const child = getChildBy(children, 'children', selection)
          onChange((child as React.ReactElement)?.props?.value)
        }
      }}
      initialSelectedItem={getSelectedValue(children, value)}
      itemToString={(item) => item || ''}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        getToggleButtonProps,
        highlightedIndex,
        inputValue,
        isOpen,
        openMenu,
        toggleMenu,
      }) => {
        return (
          <StyledSelect
            data-testid="select"
            {...getRootProps(undefined, { suppressRefError: true })}
            aria-labelledby={labelId}
          >
            <StyledTextInput data-testid="text-input-container">
              <StyledOuterWrapper
                $hasFocus={isOpen}
                $isDisabled={isDisabled}
                $isInvalid={isInvalid}
                data-testid="select-outer-wrapper"
              >
                <StyledInputWrapper data-testid="text-input-input-wrapper">
                  <StyledLabel
                    $hasContent={!!inputValue}
                    $hasFocus={false}
                    htmlFor={id}
                    id={labelId}
                    data-testid="select-label"
                  >
                    {label}
                  </StyledLabel>
                  <StyledInput
                    $hasLabel
                    data-testid="select-input"
                    disabled={isDisabled}
                    onMouseDown={() => {
                      if (!isDisabled) {
                        toggleMenu()
                      }
                    }}
                    onFocus={() => {
                      if (!isDisabled) {
                        openMenu()
                      }
                    }}
                    onMouseEnter={() => {
                      if (!isDisabled) {
                        setHasHover(true)
                      }
                    }}
                    onMouseLeave={() => setHasHover(false)}
                    readOnly
                    {...rest}
                    {...getInputProps()}
                    id={id}
                    aria-labelledby={labelId}
                  />
                </StyledInputWrapper>
                <StyledInlineButtons>
                  <ArrowButton
                    hasHover={hasHover}
                    isDisabled={isDisabled}
                    isOpen={isOpen}
                    {...getToggleButtonProps()}
                  />
                </StyledInlineButtons>
              </StyledOuterWrapper>
            </StyledTextInput>
            {isOpen && (
              <StyledOptionsWrapper>
                <StyledOptions {...getMenuProps()}>
                  {React.Children.map(
                    children,
                    (child: SelectChildType, index: number) => {
                      if (!React.isValidElement(child)) {
                        return null
                      }

                      return React.cloneElement(child, {
                        ...child.props,
                        ...getItemProps({
                          index,
                          key: `option-${index}`,
                          item: child.props.children,
                        }),
                        isHighlighted: highlightedIndex === index,
                      })
                    }
                  )}
                </StyledOptions>
              </StyledOptionsWrapper>
            )}
          </StyledSelect>
        )
      }}
    </Downshift>
  )
}

SelectE.displayName = 'SelectE'
