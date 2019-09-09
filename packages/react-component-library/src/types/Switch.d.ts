export interface OptionType {
  name: string
  value: string
}

export interface SwitchType {
  label?: string
  className?: string
  onChange?: (previous: OptionType, active: OptionType) => void
  options: OptionType[]
  size?: string
}
