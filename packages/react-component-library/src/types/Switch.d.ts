import React from 'react'

export interface OptionType {
  label: string
  value: string
}

export interface SwitchType {
  name: string
  value: string
  label?: string
  className?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  options: OptionType[]
  size?: string
}
