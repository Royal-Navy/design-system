interface OptionType {
  name: string
  value: string
}

interface SwitchType {
  label: string
  className?: string
  onChange?: (previous: OptionType, active: OptionType) => void
  options: OptionType[]
}
