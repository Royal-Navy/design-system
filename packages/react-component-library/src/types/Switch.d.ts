export interface OptionType {
  name: string
  value: string
  active?: boolean
}

export interface SwitchType {
  label?: string
  className?: string
  onChange?: (previous: OptionType, active: OptionType) => void
  options: OptionType[]
  size?: string
}
