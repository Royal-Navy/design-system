import { renderHook, act } from '@testing-library/react-hooks'

import { useIsInDocs } from './useIsInDocs'

describe('useIsInDocs', () => {
  const setSbDocsClass = (present: boolean) => {
    if (present) {
      document.body.classList.add('sbdocs')
    } else {
      document.body.classList.remove('sbdocs')
    }
  }

  it('returns true if .sbdocs class is present', () => {
    setSbDocsClass(true)

    const { result } = renderHook(() => useIsInDocs())

    expect(result.current).toBe(true)
  })

  it('returns false if .sbdocs class is absent', () => {
    setSbDocsClass(false)

    const { result } = renderHook(() => useIsInDocs())

    expect(result.current).toBe(false)
  })

  it('updates correctly on window resize events', () => {
    setSbDocsClass(true)
    const { result } = renderHook(() => useIsInDocs())
    expect(result.current).toBe(true)

    act(() => {
      setSbDocsClass(false)
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe(false)
  })
})
