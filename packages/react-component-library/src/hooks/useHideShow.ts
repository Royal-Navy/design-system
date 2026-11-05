import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useDocumentClick } from '.'

export type HideShowMouseEvents =
  | {
      onClick?: never
      onMouseEnter: () => void
      onMouseLeave: () => void
    }
  | {
      onClick: () => void
      onMouseEnter?: never
      onMouseLeave?: never
    }

export interface HideShowOptions {
  isVisible?: boolean
  onVisibleChange?: (isVisible: boolean) => void
}

export function useHideShow(
  isClick: boolean,
  closeDelay = 0,
  initialIsVisible = false,
  { isVisible: controlledIsVisible, onVisibleChange }: HideShowOptions = {}
) {
  const [uncontrolledIsVisible, setUncontrolledIsVisible] =
    useState(initialIsVisible)
  const isControlled = controlledIsVisible !== undefined
  const isVisible = isControlled ? controlledIsVisible : uncontrolledIsVisible

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const floatingBoxChildrenRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(isVisible)
  const isControlledRef = useRef(isControlled)
  const onVisibleChangeRef = useRef(onVisibleChange)
  const mouseEventsRef = useRef<HideShowMouseEvents>()

  isVisibleRef.current = isVisible
  isControlledRef.current = isControlled
  onVisibleChangeRef.current = onVisibleChange

  useEffect(() => {
    mouseEventsRef.current = undefined
  }, [closeDelay])

  const setIsVisible = useCallback((nextIsVisible: boolean) => {
    if (!isControlledRef.current) {
      setUncontrolledIsVisible(nextIsVisible)
    }

    onVisibleChangeRef.current?.(nextIsVisible)
  }, [])

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => clearTimer, [clearTimer])

  useEffect(() => {
    clearTimer()
  }, [clearTimer, controlledIsVisible])

  const hideElement = useCallback(() => {
    if (!isVisibleRef.current || timerRef.current !== null) {
      return
    }

    if (!closeDelay) {
      setIsVisible(false)
      return
    }

    timerRef.current = setTimeout(() => {
      timerRef.current = null

      if (isVisibleRef.current) {
        setIsVisible(false)
      }
    }, closeDelay)
  }, [closeDelay, setIsVisible])

  const showElement = useCallback(() => {
    clearTimer()

    if (isVisibleRef.current) {
      return
    }

    setIsVisible(true)
  }, [clearTimer, setIsVisible])

  const insideRefs = useMemo(() => [floatingBoxChildrenRef, targetRef], [])

  useDocumentClick(insideRefs, hideElement, isClick)

  mouseEventsRef.current ??= isClick
    ? {
        onClick: () => (isVisibleRef.current ? hideElement() : showElement()),
      }
    : {
        onMouseEnter: showElement,
        onMouseLeave: hideElement,
      }

  return {
    floatingBoxChildrenRef,
    isVisible,
    mouseEvents: mouseEventsRef.current,
    targetRef,
  }
}
