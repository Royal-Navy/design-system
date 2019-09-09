interface OptionType {
  name: string
  value: string
}

interface SwitchType {
  label: string
  className?: string
  onChange?: (previous: Option, active: Option) => void
  options: OptionType[]
}
