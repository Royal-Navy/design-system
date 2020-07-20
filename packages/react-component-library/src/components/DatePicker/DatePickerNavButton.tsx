import React from 'react'

export interface DatePickerNavButtonProps extends ComponentWithClass {
  children: React.ReactElement | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const DatePickerNavButton: React.FC<DatePickerNavButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className="rn-date-picker__btn-nav"
      type="button"
      onClick={onClick}
      data-testid="datepicker-nav-button"
      {...rest}
    >
      {children}
    </button>
  )
}

DatePickerNavButton.displayName = 'DatePickerNavButton'
