import React from 'react'

import { Visibility, VisibilityOff } from '../../icons'
import { DropdownOption } from './DropdownOption'

export const DropdownLabel: React.FC<DropdownOption> = ({
  isDisabled = false,
  isHidden = false,
  icon,
  label,
  rightContent,
  isVisible = false,
}) => {
  return (
    <div className={`rn-dropdownlabel ${isDisabled ? 'is-disabled' : ''}`}>
      {icon && (
        <span
          className="rn-dropdownlabel__start-adornment"
          data-testid="rn-dropdownlabel__start-adornment"
        >
          {icon}
        </span>
      )}
      <span
        className="rn-dropdownlabel__label"
        data-testid="dropdownlabel__label"
      >
        {label}
      </span>
      {isHidden && (
        <span data-testid="rn-dropdownlabel__iconinvisible">
          <VisibilityOff className="rn-dropdownlabel__end-adornment" />
        </span>
      )}
      {isVisible && (
        <span data-testid="rn-dropdownlabel__iconvisible">
          <Visibility className="is-active rn-dropdownlabel__end-adornment" />
        </span>
      )}
      {rightContent && (
        <span
          className="rn-dropdownlabel__end-adornment"
          data-testid="rn-dropdownlabel__rightcontent"
        >
          {rightContent}
        </span>
      )}
    </div>
  )
}
