import React from 'react'

import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination, OnChangeEventType } from '.'

describe('Pagination', () => {
  let onChangeSpy: (
    event: OnChangeEventType,
    currentPage: number,
    totalPages: number
  ) => void
  let wrapper: RenderResult

  describe('when there is ten pages of data', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <Pagination pageSize={10} total={95} onChange={onChangeSpy} />
      )
    })

    it('should set the `aria-label` attributes for the buttons', () => {
      expect(wrapper.getByTestId('page-first')).toHaveAttribute(
        'aria-label',
        'First page'
      )

      expect(wrapper.getByTestId('page-previous')).toHaveAttribute(
        'aria-label',
        'Previous page'
      )

      expect(wrapper.getByTestId('page-next')).toHaveAttribute(
        'aria-label',
        'Next page'
      )

      expect(wrapper.getByTestId('page-last')).toHaveAttribute(
        'aria-label',
        'Last page'
      )
    })

    it('should set the `aria-label` attribute for the text input', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'aria-label',
        'Enter page number'
      )
    })

    it('should set the `aria-hidden` attribute on the icons', () => {
      expect(wrapper.getByTestId('pagination-icon-first')).toHaveAttribute(
        'aria-hidden',
        'true'
      )

      expect(wrapper.getByTestId('pagination-icon-prev')).toHaveAttribute(
        'aria-hidden',
        'true'
      )

      expect(wrapper.getByTestId('pagination-icon-next')).toHaveAttribute(
        'aria-hidden',
        'true'
      )

      expect(wrapper.getByTestId('pagination-icon-last')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })

    it('should render page numbers', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveValue('1')
      expect(wrapper.getByText('of 10')).toBeInTheDocument()
    })

    it('should disable the `First` button', () => {
      expect(wrapper.getByTestId('page-first')).toHaveAttribute('disabled', '')
    })

    it('should disable the `Previous` button', () => {
      expect(wrapper.getByTestId('page-previous')).toHaveAttribute(
        'disabled',
        ''
      )
    })

    it('should enable the `Next` button', () => {
      expect(wrapper.getByTestId('page-next')).not.toHaveAttribute('disabled')
    })

    it('should enable the `Last` button', () => {
      expect(wrapper.getByTestId('page-last')).not.toHaveAttribute('disabled')
    })

    describe('and the `Next` button is clicked', () => {
      let inputName: string | null

      beforeEach(() => {
        inputName = wrapper.getByTestId('text-input-input').getAttribute('name')
        return userEvent.click(wrapper.getByTestId('page-next'))
      })

      it('does not generate new a new input `name`', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
          'name',
          inputName
        )
      })

      it('should call the onChange callback', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(
          expect.objectContaining({ _reactName: 'onClick' }),
          2,
          10
        )
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
      })

      it('should update the text input', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveValue('2')
      })
    })

    describe('and the `Last` button is clicked', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('page-last'))
      })

      it('should call the onChange callback', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(
          expect.objectContaining({ _reactName: 'onClick' }),
          10,
          10
        )
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
      })

      it('should update the text input', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveValue('10')
      })

      it('should disable the `Next` button', () => {
        expect(wrapper.getByTestId('page-next')).toHaveAttribute('disabled', '')
      })

      it('should disable the `Last` button', () => {
        expect(wrapper.getByTestId('page-last')).toHaveAttribute('disabled', '')
      })
    })

    describe('and typing in the input', () => {
      describe('when the value is valid', () => {
        beforeEach(async () => {
          const input = wrapper.getByTestId('text-input-input')
          await userEvent.type(input, '{backspace}')
          await userEvent.type(input, '8')
          await userEvent.type(input, '{enter}')
        })

        it('should not display an error', () => {
          expect(wrapper.queryAllByText('Check page number')).toHaveLength(0)
        })

        it('should render page numbers', () => {
          expect(wrapper.getByTestId('text-input-input')).toHaveValue('8')
          expect(wrapper.getByText('of 10')).toBeInTheDocument()
        })

        it('should call the onChange callback', () => {
          expect(onChangeSpy).toHaveBeenCalledWith(
            expect.objectContaining({ _reactName: 'onKeyDown' }),
            8,
            10
          )
          expect(onChangeSpy).toHaveBeenCalledTimes(1)
        })
      })

      describe('when the value is invalid', () => {
        describe('when the value is less than 0', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('text-input-input')
            await userEvent.type(input, '{backspace}')
            await userEvent.type(input, '-')
            await userEvent.type(input, '1')
            await userEvent.type(input, '{enter}')
          })

          it('should display an error', () => {
            expect(wrapper.getByText('Check page number')).toBeVisible()
          })

          it('should display the error in the correct position', () => {
            const error = wrapper.getByTestId('tooltip')
            expect(error).toHaveStyleRule('bottom', '39px')
            expect(error).toHaveStyleRule('right', '3px')
            expect(error).toHaveStyleRule('width', '155px')
          })

          it('should not call the onChange callback', () => {
            expect(onChangeSpy).not.toHaveBeenCalled()
          })

          describe('and the next button is clicked', () => {
            beforeEach(() => {
              return userEvent.click(wrapper.getByTestId('page-next'))
            })

            it('should hide the error', () => {
              expect(wrapper.queryAllByText('Check page number')).toHaveLength(
                0
              )
            })

            it('should call the onChange callback', () => {
              expect(onChangeSpy).toHaveBeenCalledWith(
                expect.objectContaining({ _reactName: 'onClick' }),
                2,
                10
              )
              expect(onChangeSpy).toHaveBeenCalledTimes(1)
            })
          })
        })

        describe('when the value is greater than the total', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('text-input-input')
            await userEvent.type(input, '{backspace}')
            await userEvent.type(input, '1')
            await userEvent.type(input, '1')
            await userEvent.type(input, '{enter}')
          })

          it('should display an error', () => {
            expect(wrapper.getByText('Check page number')).toBeVisible()
          })

          it('should not call the onChange callback', () => {
            expect(onChangeSpy).not.toHaveBeenCalled()
          })
        })

        describe('when the value is not a number', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('text-input-input')
            await userEvent.type(input, '{backspace}')
            await userEvent.type(input, 'a')
            await userEvent.type(input, '{enter}')
          })

          it('should display an error', () => {
            expect(wrapper.getByText('Check page number')).toBeVisible()
          })

          it('should not call the onChange callback', () => {
            expect(onChangeSpy).not.toHaveBeenCalled()
          })
        })
      })
    })
  })

  describe('when there is one page of data and the current page is 1', () => {
    beforeEach(() => {
      wrapper = render(<Pagination pageSize={10} total={2} />)
    })

    it('should render page numbers', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveValue('1')
      expect(wrapper.getByText('of 1')).toBeInTheDocument()
    })

    it('should disable the `First` button', () => {
      expect(wrapper.getByTestId('page-first')).toHaveAttribute('disabled', '')
    })

    it('should disable the `Previous` button', () => {
      expect(wrapper.getByTestId('page-previous')).toHaveAttribute(
        'disabled',
        ''
      )
    })

    it('should disable the `Next` button', () => {
      expect(wrapper.getByTestId('page-next')).toHaveAttribute('disabled', '')
    })

    it('should disable the `Last` button', () => {
      expect(wrapper.getByTestId('page-last')).toHaveAttribute('disabled', '')
    })
  })

  describe('when the initial page is 5', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <Pagination
          initialPage={5}
          onChange={onChangeSpy}
          pageSize={10}
          total={95}
        />
      )
    })

    it('should render page numbers', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveValue('5')
      expect(wrapper.getByText('of 10')).toBeInTheDocument()
    })

    it('should enable the `First` button', () => {
      expect(wrapper.getByTestId('page-first')).not.toHaveAttribute('disabled')
    })

    it('should enable the `Prev` button', () => {
      expect(wrapper.getByTestId('page-previous')).not.toHaveAttribute(
        'disabled'
      )
    })

    it('should enable the `Next` button', () => {
      expect(wrapper.getByTestId('page-next')).not.toHaveAttribute('disabled')
    })

    it('should enable the `Last` button', () => {
      expect(wrapper.getByTestId('page-last')).not.toHaveAttribute('disabled')
    })

    describe('and the `Previous` button is clicked', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('page-previous'))
      })

      it('should call the onChange callback', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(
          expect.objectContaining({ _reactName: 'onClick' }),
          4,
          10
        )
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
      })

      it('should update the text input', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveValue('4')
      })
    })

    describe('and the `First` button is clicked', () => {
      beforeEach(() => {
        return userEvent.click(wrapper.getByTestId('page-first'))
      })

      it('should call the onChange callback', () => {
        expect(onChangeSpy).toHaveBeenCalledWith(
          expect.objectContaining({ _reactName: 'onClick' }),
          1,
          10
        )
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
      })

      it('should update the text input', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveValue('1')
      })
    })
  })

  describe('when passing arbitrary props', () => {
    beforeEach(() => {
      wrapper = render(
        <Pagination data-arbitrary="arbitrary" pageSize={10} total={45} />
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('pagination')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
