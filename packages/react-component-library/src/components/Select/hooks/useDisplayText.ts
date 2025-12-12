import { useState, useEffect, useMemo, useCallback, RefObject } from 'react'
import { isNil } from 'lodash'

const FULL_TEXT_BUFFER = 60

interface UseDisplayTextParams {
  isMulti: boolean
  selectedItem: string | null
  selectedItems: string[]
  itemsMap: Record<string, React.ReactElement>
  inputRef: RefObject<HTMLInputElement>
}

export const useDisplayText = ({
  isMulti,
  selectedItem,
  selectedItems,
  itemsMap,
  inputRef,
}: UseDisplayTextParams): string => {
  const [useMultipleText, setUseMultipleText] = useState(false)

  const getFullText = useCallback(
    (selectedValues: string[]): string => {
      if (selectedValues.length === 0) {
        return ''
      }

      return selectedValues
        .map((itemValue) => itemsMap[itemValue]?.props.children || itemValue)
        .sort((a, b) => a.localeCompare(b))
        .join(', ')
    },
    [itemsMap]
  )

  const displayText = useMemo(() => {
    if (!isMulti) {
      return isNil(selectedItem) ? '' : itemsMap[selectedItem].props.children
    }

    return useMultipleText ? 'Multiple selected' : getFullText(selectedItems)
  }, [
    isMulti,
    selectedItem,
    itemsMap,
    useMultipleText,
    getFullText,
    selectedItems,
  ])

  useEffect(() => {
    if (!isMulti || !inputRef.current) {
      return () => {}
    }

    const checkTextFit = () => {
      if (!inputRef.current) {
        return
      }

      // Having one item means we always want to show it regardless of how long the text is
      if (selectedItems.length === 1) {
        setUseMultipleText(false)
        return
      }

      const fullText = getFullText(selectedItems)
      const inputWidth = inputRef.current.offsetWidth

      // Measure text width using canvas
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      if (!context) {
        setUseMultipleText(false)
        return
      }

      const computedStyle = globalThis.getComputedStyle(inputRef.current)
      context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`
      const textWidth = context.measureText(fullText).width

      setUseMultipleText(textWidth > inputWidth - FULL_TEXT_BUFFER)
    }

    checkTextFit()

    const resizeObserver = new ResizeObserver(() => {
      checkTextFit()
    })

    resizeObserver.observe(inputRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [inputRef, isMulti, getFullText, selectedItems])

  return displayText
}
