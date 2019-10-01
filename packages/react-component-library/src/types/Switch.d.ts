import React from 'react'

export interface OptionType {
  label: string
  value: string
}

export interface SwitchType {
  className?: string
  errorMessage?: string
  label?: string
  name: string
  options: OptionType[]
  size?: string
  value: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}
