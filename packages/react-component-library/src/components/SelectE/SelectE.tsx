import React, { useState } from 'react'
import { useSelect } from 'downshift'

import { ArrowButton } from './ArrowButton'
import { ClearButton } from './ClearButton'
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
  children: SelectChildrenType
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
  onChange?: (value: string | null) => void
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string
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
  const itemToString = (item: SelectChildType) => {
    return React.isValidElement(item) ? item.props.children : null
  }

  const {
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    openMenu,
    selectItem,
    selectedItem,
    toggleMenu,
  } = useSelect({
    itemToString,
    initialSelectedItem: React.Children.toArray(children).find((child) => {
      return React.isValidElement(child) ? child.props.value === value : null
    }),
    items: React.Children.toArray(children),
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      if (onChange) {
        onChange(React.isValidElement(newItem) ? newItem.props.value : null)
      }
    },
  })

  return (
    <StyledSelect data-testid="select" aria-labelledby={labelId}>
      <StyledTextInput data-testid="text-input-container">
        <StyledOuterWrapper
          $hasFocus={isOpen}
          $isDisabled={isDisabled}
          $isInvalid={isInvalid}
          data-testid="select-outer-wrapper"
        >
          <StyledInputWrapper data-testid="text-input-input-wrapper">
            <StyledLabel
              $hasContent={!!selectedItem}
              $hasFocus={false}
              htmlFor={id}
              id={labelId}
              data-testid="select-label"
            >
              {label}
            </StyledLabel>
            <StyledInput
              $hasLabel
              aria-labelledby={labelId}
              data-testid="select-input"
              disabled={isDisabled}
              onFocus={() => {
                openMenu()
              }}
              onMouseDown={(e) => {
                toggleMenu()
                e.stopPropagation()
                e.preventDefault()
              }}
              onMouseEnter={() => {
                if (!isDisabled) {
                  setHasHover(true)
                }
              }}
              onMouseLeave={() => setHasHover(false)}
              readOnly
              id={id}
              value={selectedItem ? itemToString(selectedItem) : ''}
              {...rest}
            />
          </StyledInputWrapper>
          <StyledInlineButtons>
            {selectedItem && (
              <ClearButton
                isDisabled={isDisabled}
                onClick={() => selectItem(null)}
              />
            )}
            <ArrowButton
              hasHover={hasHover}
              isDisabled={isDisabled}
              isOpen={isOpen}
              {...getToggleButtonProps()}
            />
          </StyledInlineButtons>
        </StyledOuterWrapper>
      </StyledTextInput>
      <StyledOptionsWrapper $isVisible={isOpen}>
        <StyledOptions {...getMenuProps()}>
          {isOpen &&
            React.Children.map(children, (child: SelectChildType, index) => {
              if (!React.isValidElement(child)) {
                return null
              }

              return React.cloneElement(child, {
                ...child.props,
                ...getItemProps({
                  index,
                  item: child,
                  key: `select-option-${child.props.children}`,
                }),
                isHighlighted: highlightedIndex === index,
              })
            })}
        </StyledOptions>
      </StyledOptionsWrapper>
    </StyledSelect>
  )
}

SelectE.displayName = 'SelectE'
