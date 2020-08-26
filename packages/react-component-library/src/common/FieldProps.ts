export interface FieldProps {
  name: string
  value: string
  onChange: (e: React.SyntheticEvent) => void
  onBlur: (e: React.SyntheticEvent) => void
}
