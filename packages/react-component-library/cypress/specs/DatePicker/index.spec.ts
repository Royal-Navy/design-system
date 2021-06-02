import { describe, cy, it, before } from 'local-cypress'
import { startOfMonth, format } from 'date-fns'
import { ColorAction600 } from '@royalnavy/design-tokens'

import { DATE_FORMAT } from '../../../src/constants'
import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'

describe('DatePicker', () => {
  describe('when a day is selected', () => {
    before(() => {
      cy.visit('/iframe.html?id=date-picker--default&viewMode=story')

      cy.get(selectors.datePicker.input).focus()
    })

    it('should show the days', () => {
      cy.get(selectors.datePicker.floatingBox).should(
        'have.css',
        'opacity',
        '1'
      )
    })

    describe('and the first day is clicked', () => {
      before(() => {
        cy.get(selectors.datePicker.day.inside).contains('1').click()
      })

      it('should set the value of the input to the date', () => {
        const expectedDate = startOfMonth(new Date())

        cy.get(selectors.datePicker.input).should(
          'have.value',
          format(expectedDate, DATE_FORMAT.SHORT)
        )
      })

      it('should not be in an error state', () => {
        cy.get(selectors.datePicker.outerWrapper).should(
          'have.css',
          'border',
          `1px solid ${hexToRgb(ColorAction600)}`
        )
      })
    })
  })
})
