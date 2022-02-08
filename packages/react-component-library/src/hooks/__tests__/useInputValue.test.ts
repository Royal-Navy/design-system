import React from 'react'
import { act, renderHook, RenderResult } from '@testing-library/react-hooks'

import { useInputValue } from '../useInputValue'

describe('useInputValue', () => {
  let rerender: (value: string | undefined) => void
  let result: RenderResult<{
    committedValue: string
    hasValue: boolean
    onValueChange: <T>(event: React.ChangeEvent<T>) => void
  }>

  beforeEach(() => {
    const render = renderHook(
      (value: string | undefined) => useInputValue(value),
      {
        initialProps: undefined,
      }
    )

    rerender = render.rerender
    result = render.result
  })

  it('should set `committedValue` as an empty string', () => {
    expect(result.current.committedValue).toEqual('')
  })

  it('should set `hasValue` to `false`', () => {
    expect(result.current.hasValue).toBeFalsy()
  })

  describe('when the user types', () => {
    beforeEach(() => {
      act(() => {
        const event = {
          target: {
            value: 'a',
          },
        }

        // @ts-ignore
        result.current.onValueChange(event)
      })
    })

    it('should set `committedValue`', () => {
      expect(result.current.committedValue).toEqual('a')
    })

    it('should set `hasValue` to `true`', () => {
      expect(result.current.hasValue).toBeTruthy()
    })
  })

  describe('when the user deletes', () => {
    beforeEach(() => {
      act(() => {
        const event = {
          target: {},
        }

        // @ts-ignore
        result.current.onValueChange(event)
      })
    })

    it('should set `committedValue` as an empty string', () => {
      expect(result.current.committedValue).toEqual('')
    })
  })

  describe('when `value` is updated by a side effect', () => {
    describe('and the value is a string', () => {
      beforeEach(() => {
        rerender('new')
      })

      it('should set `committedValue`', () => {
        expect(result.current.committedValue).toEqual('new')
      })
    })

    describe('and the value is undefined', () => {
      beforeEach(() => {
        rerender(undefined)
      })

      it('should set `committedValue` as an empty string', () => {
        expect(result.current.committedValue).toEqual('')
      })
    })
  })
})
