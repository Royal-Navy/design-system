import { describe, cy, it, before } from 'local-cypress'
import { addDays, startOfMonth, format } from 'date-fns'
import { ColorNeutral200 } from '@defencedigital/design-tokens'

import { DATE_FORMAT } from '../../../src/constants'
import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'
import { formatDatesForInput } from '../../../src/components/DatePicker/utils/formatDatesForInput'

describe('DatePicker', () => {
  describe('when a day is selected', () => {
    before(() => {
      cy.visit('/iframe.html?id=date-picker--default&viewMode=story')

      cy.get(selectors.datePicker.button).click()
    })

    it('should show the days', () => {
      cy.get(selectors.datePicker.floatingBox, { timeout: 15000 }).should(
        'be.visible'
      )
    })

    describe('and the first day is clicked', () => {
      before(() => {
        cy.get(selectors.datePicker.day.inside)
          .contains('1')
          .click({ force: true })
      })

      it('should set the value of the input to the date', () => {
        const from = startOfMonth(new Date())
        const expected = formatDatesForInput(from, null, DATE_FORMAT.SHORT)

        cy.get(selectors.datePicker.input).should('have.value', expected)
      })

      it('should not be in an error state', () => {
        cy.get(selectors.datePicker.outerWrapper).should(
          'have.css',
          'box-shadow',
          `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
        )
      })
    })
  })

  describe('when a range is selected', () => {
    before(() => {
      cy.visit('/iframe.html?id=date-picker--range&viewMode=story')

      cy.get(selectors.datePicker.input).click()
    })

    it('should show the days', () => {
      cy.get(selectors.datePicker.floatingBox).should('be.visible')
    })

    describe('and the `from` day is clicked', () => {
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

      describe('and the `to` day is clicked', () => {
        before(() => {
          cy.get(selectors.datePicker.day.inside).contains('10').click()
        })

        it('should set the value of the input to the range', () => {
          const from = startOfMonth(new Date())
          const to = addDays(from, 9)
          const expected = formatDatesForInput(from, to, DATE_FORMAT.SHORT)

          cy.get(selectors.datePicker.input).should('have.value', expected)
        })

        describe('and the picker is closed', () => {
          before(() => {
            cy.get(selectors.datePicker.button).click()

            cy.wait(1000)
          })

          it('should not be in an error state', () => {
            cy.get(selectors.datePicker.outerWrapper).should(
              'have.css',
              'box-shadow',
              `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
            )
          })
        })
      })
    })
  })
})
