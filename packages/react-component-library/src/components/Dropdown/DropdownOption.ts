import React from 'react'

export interface DropdownOption {
  isDisabled?: boolean
  isHidden?: boolean
  icon?: React.ReactNode
  label: string
  rightContent?: React.ReactNode
  value: string
  isVisible?: boolean
}
