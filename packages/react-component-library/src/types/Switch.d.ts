export interface OptionType {
  label: string
  value: string
}

export interface SwitchType {
  name: string
  value: string
  label?: string
  className?: string
  onChange?: (previous: OptionType, active: OptionType) => void
  options: OptionType[]
  size?: string
}
