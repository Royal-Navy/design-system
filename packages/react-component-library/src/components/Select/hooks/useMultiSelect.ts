import { useCallback, useMemo, useState } from 'react'
import { SelectProps } from '../Select'

interface UseMultiSelectOptions {
  isMulti: boolean
  initialValue?: SelectProps['initialValue']
  value: SelectProps['value']
}

export function useMultiSelect({
  isMulti,
  initialValue,
  value,
}: UseMultiSelectOptions): {
  selectedItems: string[]
  setSelectedItems: (selectedItems: string[]) => void
} {
  const isControlled = value !== undefined

  const [selectedItems, setSelectedItems] = useState<string[]>(() => {
    if (isMulti && initialValue && Array.isArray(initialValue)) {
      return initialValue
    }

    return []
  })

  const currentSelectedItems = useMemo(() => {
    if (!isMulti) {
      return []
    }

    return isControlled && Array.isArray(value) ? value : selectedItems
  }, [isMulti, isControlled, value, selectedItems])

  const setSelectedItemsIfNotControlled = useCallback(
    (newSelectedItems: string[]) => {
      if (!isControlled) {
        setSelectedItems(newSelectedItems)
      }
    },
    [isControlled, setSelectedItems]
  )

  return {
    selectedItems: currentSelectedItems,
    setSelectedItems: setSelectedItemsIfNotControlled,
  }
}
