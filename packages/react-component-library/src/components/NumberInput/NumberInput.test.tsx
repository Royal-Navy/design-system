import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent, waitForElement } from '@testing-library/react'

import { NumberInput } from './NumberInput'

describe('NumberInput', () => {
  let wrapper: RenderResult
  let onChangeSpy: (event: any) => void

  beforeEach(() => {
    onChangeSpy = jest.fn()
  })

  describe('when minimal props', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput name="number-input" onChange={onChangeSpy} />
      )
    })

    it('should not display a start adornment', () => {
      expect(
        wrapper.queryAllByTestId('number-input-start-adornment')
      ).toHaveLength(0)
    })

    it('should not display a label', () => {
      expect(wrapper.queryAllByTestId('number-input-label')).toHaveLength(0)
    })

    it('should not display a value', () => {
      const input = wrapper.getByTestId(
        'number-input-input'
      ) as HTMLInputElement
      expect(input.value).toEqual('')
    })

    it('should set the name attribute', () => {
      expect(
        wrapper.getByTestId('number-input-input').getAttribute('name')
      ).toEqual('number-input')
    })

    it('should not display a footnote', () => {
      expect(wrapper.queryAllByTestId('number-input-footnote')).toHaveLength(0)
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-increase').click()
      })

      it('should increase the value by 1', () => {
        const input = wrapper.getByTestId(
          'number-input-input'
        ) as HTMLInputElement
        expect(input.value).toEqual('1')
      })

      it('should call the onChange callback', () => {
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
        expect(onChangeSpy).toHaveBeenCalledWith({
          target: {
            name: 'number-input',
            value: 1,
          },
        })
      })

      describe('and the decrease button is clicked', () => {
        beforeEach(() => {
          wrapper.getByTestId('number-input-decrease').click()
        })

        it('should decrease the value by 1', () => {
          const input = wrapper.getByTestId(
            'number-input-input'
          ) as HTMLInputElement
          expect(input.value).toEqual('0')
        })

        it('should call the onChange callback', () => {
          expect(onChangeSpy).toHaveBeenCalledTimes(2)
          expect(onChangeSpy).toHaveBeenCalledWith({
            target: {
              name: 'number-input',
              value: 0,
            },
          })
        })

        describe('and the decrease button is clicked', () => {
          beforeEach(() => {
            wrapper.getByTestId('number-input-decrease').click()
          })

          it('should decrease the value by 1', () => {
            const input = wrapper.getByTestId(
              'number-input-input'
            ) as HTMLInputElement
            expect(input.value).toEqual('-1')
          })

          it('should call the onChange callback', () => {
            expect(onChangeSpy).toHaveBeenCalledTimes(3)
            expect(onChangeSpy).toHaveBeenCalledWith({
              target: {
                name: 'number-input',
                value: -1,
              },
            })
          })
        })
      })
    })
  })

  describe('when there is a footnote', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          footnote="Footnote"
          name="number-input"
          onChange={onChangeSpy}
        />
      )
    })

    it('should display the footnote', () => {
      expect(wrapper.getByTestId('number-input-footnote').textContent).toEqual(
        'Footnote'
      )
    })
  })

  describe('when there is a label', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput label="Label" name="number-input" onChange={onChangeSpy} />
      )
    })

    it('should display the footnote', () => {
      expect(wrapper.getByTestId('number-input-label').textContent).toEqual(
        'Label'
      )
    })
  })

  describe('when max and min are specified', () => {
    beforeEach(() => {
      wrapper = render(
        <>
          <NumberInput
            max={3}
            min={0}
            name="number-input"
            onChange={onChangeSpy}
          />
          <input type="text" data-testid="next-field" />
        </>
      )
    })

    describe('and the increase button is clicked four times', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()
        increase.click()
        increase.click()
        increase.click()
      })

      it('should increase the value to the max 3', () => {
        const input = wrapper.getByTestId(
          'number-input-input'
        ) as HTMLInputElement
        expect(input.value).toEqual('3')
      })

      describe('and the decrease button is clicked four times', () => {
        beforeEach(() => {
          const decrease = wrapper.getByTestId('number-input-decrease')
          decrease.click()
          decrease.click()
          decrease.click()
          decrease.click()
        })

        it('should decrease the value to the min 0', () => {
          const input = wrapper.getByTestId(
            'number-input-input'
          ) as HTMLInputElement
          expect(input.value).toEqual('0')
        })
      })
    })

    describe('and the increase button is clicked once', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()

        wrapper.getByTestId('number-input-input').focus()
      })

      describe('and the user types an invalid character', () => {
        beforeEach(() => {
          fireEvent.change(wrapper.getByTestId('number-input-input'), {
            target: {
              value: 'a',
            },
          })
        })

        it('should not change the value', () => {
          const input = wrapper.getByTestId(
            'number-input-input'
          ) as HTMLInputElement
          expect(input.value).toEqual('1')
        })
      })

      describe('and the user types a valid number', () => {
        beforeEach(() => {
          fireEvent.change(wrapper.getByTestId('number-input-input'), {
            target: {
              value: '3',
            },
          })
        })

        it('should change the value', () => {
          const input = wrapper.getByTestId(
            'number-input-input'
          ) as HTMLInputElement
          expect(input.value).toEqual('3')
        })
      })

      describe('and the user types an number outside the max min range', () => {
        beforeEach(() => {
          fireEvent.change(wrapper.getByTestId('number-input-input'), {
            target: {
              value: '4',
            },
          })
        })

        it('should display the value', () => {
          const input = wrapper.getByTestId(
            'number-input-input'
          ) as HTMLInputElement
          expect(input.value).toEqual('4')
        })

        describe('and the number input loses focus', () => {
          beforeEach(() => {
            wrapper.getByTestId('next-field').focus()
          })

          it('should display the last valid value', () => {
            const input = wrapper.getByTestId(
              'number-input-input'
            ) as HTMLInputElement
            expect(input.value).toEqual('1')
          })
        })
      })
    })
  })

  describe('when the step is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput name="number-input" step={3} onChange={onChangeSpy} />
      )
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()
      })

      it('should increase the value to 3', () => {
        const input = wrapper.getByTestId(
          'number-input-input'
        ) as HTMLInputElement
        expect(input.value).toEqual('3')
      })

      describe('and the decrease button is clicked', () => {
        beforeEach(() => {
          const decrease = wrapper.getByTestId('number-input-decrease')
          decrease.click()
        })

        it('should decrease the value to 0', () => {
          const input = wrapper.getByTestId(
            'number-input-input'
          ) as HTMLInputElement
          expect(input.value).toEqual('0')
        })
      })
    })
  })

  describe('when the start adornment is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          name="number-input"
          startAdornment="Example"
          onChange={onChangeSpy}
        />
      )
    })

    it('should render the text', () => {
      expect(
        wrapper.getByTestId('number-input-start-adornment')
      ).toHaveTextContent('Example')
    })
  })

  describe('when a CSS class name is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          className="number-input__custom"
          name="number-input"
          onChange={onChangeSpy}
        />
      )
    })

    it('should add the CSS modifier', () => {
      expect(wrapper.getByTestId('number-input-container').classList).toContain(
        'number-input__custom'
      )
    })
  })

  describe('when an ID is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          id="number-input-id"
          label="Label"
          name="number-input"
          onChange={onChangeSpy}
        />
      )
    })

    it('should add the ID attribute', () => {
      expect(
        wrapper.getByTestId('number-input-input').getAttribute('id')
      ).toEqual('number-input-id')
    })

    it('should associate the label with the field', () => {
      expect(
        wrapper.getByTestId('number-input-label').getAttribute('for')
      ).toEqual('number-input-id')
    })
  })

  describe('when the onBlur callback is specified', () => {
    let onBlurSpy: (event: React.FormEvent) => void

    beforeEach(() => {
      onBlurSpy = jest.fn()

      wrapper = render(
        <>
          <NumberInput
            name="number-input"
            onBlur={onBlurSpy}
            onChange={onChangeSpy}
          />
          <input type="text" data-testid="next-field" />
        </>
      )
    })

    describe('and the number input loses focus', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-input').focus()
        wrapper.getByTestId('next-field').focus()
      })

      it('should call the onBlur callback', () => {
        expect(onBlurSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when a label is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput label="Label" name="number-input" onChange={onChangeSpy} />
      )
    })

    describe('and the user focuses on the field', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-input').focus()
      })

      it('the label should be shrunk', () => {
        expect(
          wrapper.getByTestId('number-input-container').classList
        ).toContain('has-focus')
      })
    })
  })
})
