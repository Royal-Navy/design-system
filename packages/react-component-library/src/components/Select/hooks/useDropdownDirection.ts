import { useCallback, useEffect, useRef, useState } from 'react'
import { PopupPosition } from '../../SelectBase/SelectBaseProps'

export function useDropdownDirection(dropdownHeight = 230, isOpen = false) {
  const triggerRef = useRef<HTMLElement>(null)
  const [popupPosition, setPopupPosition] = useState<PopupPosition>('below')

  const checkDirection = useCallback(() => {
    if (!triggerRef.current) {
      return
    }

    const rect = triggerRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top

    // If there's not enough space below but more space above, position above
    if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
      setPopupPosition('above')
    } else {
      setPopupPosition('below')
    }
  }, [dropdownHeight])

  useEffect(() => {
    checkDirection()

    window.addEventListener('scroll', checkDirection, true)
    window.addEventListener('resize', checkDirection)

    return () => {
      window.removeEventListener('scroll', checkDirection, true)
      window.removeEventListener('resize', checkDirection)
    }
  }, [checkDirection])

  useEffect(() => {
    if (isOpen) {
      checkDirection()
    }
  }, [isOpen, checkDirection])

  return { triggerRef, popupPosition, checkDirection }
}
