import React from 'react'

import { BADGE_SIZE, BADGE_VARIANT, BadgeProps } from '../Badge'
import { StyledOption } from './partials/StyledOption'
import { StyledOptionBadge } from './partials/StyledOptionBadge'
import { StyledOptionText } from './partials/StyledOptionText'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'
import { StyledCheckbox } from './partials/StyledCheckbox'
import logger from '../../utils/logger'

type CustomBadgeProps = Omit<BadgeProps, 'children'>

export type SelectBaseOptionBadge =
  | string
  | number
  | ({ label: string | number } & CustomBadgeProps)

export interface SelectBaseOptionProps extends ComponentWithClass {
  /**
   * @deprecated Use `badges` instead.
   */
  badge?: string | number
  /**
   * @deprecated Use `badges` instead.
   */
  badgeProps?: CustomBadgeProps
  badges?: SelectBaseOptionBadge[]
  icon?: React.ReactNode
  isHighlighted?: boolean
  value: string
  title?: string
  isDisabled?: boolean
  showCheckbox?: boolean
  isSelected?: boolean
}

export interface SelectBaseOptionAsStringProps extends SelectBaseOptionProps {
  children: string
}

function resolveBadges({
  badge,
  badgeProps,
  badges,
}: Pick<SelectBaseOptionProps, 'badge' | 'badgeProps' | 'badges'>): {
  label: string | number
  props: CustomBadgeProps
}[] {
  if (badges) {
    if (badge !== undefined || badgeProps !== undefined) {
      logger.warn(
        'SelectBaseOption: deprecated `badge` and `badgeProps` are ignored when `badges` is set'
      )
    }

    return badges.map((item) => {
      if (typeof item === 'object') {
        const { label, ...props } = item
        return { label, props }
      }

      return { label: item, props: {} }
    })
  }

  return badge ? [{ label: badge, props: badgeProps ?? {} }] : []
}

export const SelectBaseOption = React.forwardRef<
  HTMLLIElement,
  SelectBaseOptionProps
>(
  (
    {
      badge,
      badgeProps,
      badges,
      icon,
      children,
      isHighlighted,
      title,
      isDisabled,
      showCheckbox,
      isSelected,
      ...rest
    },
    ref
  ) => {
    const resolvedBadges = resolveBadges({ badge, badgeProps, badges })

    return (
      <StyledOption
        $isHighlighted={isHighlighted}
        data-testid="select-option"
        ref={ref}
        disabled={isDisabled}
        {...rest}
      >
        {showCheckbox && (
          <StyledCheckbox
            isDisabled={isDisabled}
            checked={isSelected}
            variant={CHECKBOX_RADIO_VARIANT.NO_CONTAINER}
          />
        )}
        {icon}
        <StyledOptionText title={title}>{children}</StyledOptionText>
        {resolvedBadges.map(({ label, props }, index) => (
          <StyledOptionBadge
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            data-testid="select-badge"
            size={BADGE_SIZE.XSMALL}
            variant={BADGE_VARIANT.PILL}
            {...props}
          >
            {label}
          </StyledOptionBadge>
        ))}
      </StyledOption>
    )
  }
)

SelectBaseOption.displayName = 'SelectBaseOption'
