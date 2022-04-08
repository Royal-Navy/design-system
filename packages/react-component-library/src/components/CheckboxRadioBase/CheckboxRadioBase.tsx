import React, { useRef, useState, useEffect } from 'react'
import mergeRefs from 'react-merge-refs'

import { CHECKBOX_RADIO_VARIANT } from './types'
import { CheckboxRadioBaseProps } from './CheckboxRadioBaseProps'
import { StyledWrapper } from './partials/StyledWrapper'
import { StyledInnerWrapper } from './partials/StyledInnerWrapper'
import { StyledDescription } from './partials/StyledDescription'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'
import { useExternalId } from '../../hooks/useExternalId'

export const CheckboxRadioBase = React.forwardRef<
  HTMLInputElement,
  CheckboxRadioBaseProps
>(
  (
    {
      className = '',
      id: externalId,
      checked = false,
      defaultChecked,
      description,
      isDisabled = false,
      isInvalid,
      label,
      name,
      onChange,
      onBlur,
      value,
      variant = CHECKBOX_RADIO_VARIANT.DEFAULT,
      type,
      partials: { Root, Checkmark },
      ...rest
    },
    ref
  ) => {
    const id = useExternalId(`${type}-input`, externalId)
    const localRef = useRef<HTMLInputElement>(null)
    const isControlled = defaultChecked === undefined
    const hasContainer = variant !== CHECKBOX_RADIO_VARIANT.NO_CONTAINER
    const [isChecked, setIsChecked] = useState<boolean>(
      defaultChecked ?? checked
    )

    // Respect external changes to `defaultChecked` and `checked`
    useEffect(() => {
      setIsChecked(defaultChecked ?? checked)
    }, [defaultChecked, checked])

    // Handle implicit deselection of radio in collection
    useEffect(() => {
      const handleSelected = (e: Event) => {
        const {
          detail: { ref: emittedRef },
        } = e as CustomEvent

        const isDifferent = emittedRef !== localRef
        const isInCollection = emittedRef.current.attributes.name.value === name
        const isRadio = type === 'radio'

        if (isDifferent && isInCollection && isRadio) {
          setIsChecked(false)
        }
      }

      document.addEventListener('_mod-uk-ds:radio:selected', handleSelected)

      return () => {
        document.removeEventListener(
          '_mod-uk-ds:radio:selected',
          handleSelected
        )
      }
    }, [type, name])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== localRef.current) {
        localRef.current?.click()
      }
    }

    const handleKeyUp = (_: React.KeyboardEvent) => {
      localRef.current?.focus()
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
      setIsChecked(e.currentTarget.checked)

      if (type === 'radio') {
        const event = new CustomEvent('_mod-uk-ds:radio:selected', {
          detail: { ref: localRef },
        })

        document.dispatchEvent(event)
      }

      if (onChange) {
        onChange(e)
      }
    }

    return (
      <StyledWrapper>
        <Root
          className={className}
          role={type}
          aria-checked={isChecked}
          $isDisabled={isDisabled}
          $hasContainer={hasContainer}
          $isInvalid={isInvalid}
          $isChecked={isChecked}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          data-testid={type}
        >
          <StyledInnerWrapper $hasContainer={hasContainer}>
            <StyledLabel
              $hasContainer={hasContainer}
              $hasDescription={!!description}
              $isDisabled={isDisabled}
              htmlFor={id}
              data-testid={`${type}-label`}
            >
              <StyledInput
                defaultChecked={defaultChecked}
                ref={mergeRefs([localRef, ref])}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleOnChange}
                onBlur={onBlur}
                disabled={isDisabled}
                data-testid={`${type}-input`}
                checked={isControlled ? isChecked : undefined}
                {...rest}
              />
              <Checkmark $hasContainer={hasContainer} />
              {label}
              {description && (
                <StyledDescription data-testid={`${type}-description`}>
                  {description}
                </StyledDescription>
              )}
            </StyledLabel>
          </StyledInnerWrapper>
        </Root>
      </StyledWrapper>
    )
  }
)

CheckboxRadioBase.displayName = 'CheckboxRadioBase'
