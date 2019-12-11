import React from 'react'

export interface DropdownOption {
  isDisabled?: boolean
  hidden?: boolean
  icon?: React.ReactNode
  label: string
  rightContent?: React.ReactNode
  value: string
  visible?: boolean
}
