import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { SelectOptionWithBadgeType } from './Option'

export function useSelectedOption(
  options: SelectOptionWithBadgeType[],
  value: string
): {
  selectedOption: SelectOptionWithBadgeType
  setSelectedValue: Dispatch<SetStateAction<string>>
} {
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionWithBadgeType>(
      options.find((option) => option.value === value)
    )
  const [selectedValue, setSelectedValue] = useState<string>(value)

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  useEffect(() => {
    setSelectedOption(
      options.find((option) => option.value === selectedValue) || null
    )
  }, [options, selectedValue])

  return {
    selectedOption,
    setSelectedValue,
  }
}
