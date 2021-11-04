import { describe, cy, it, before } from 'local-cypress'
import { addDays, startOfMonth, format } from 'date-fns'
import {
  ColorAction600,
  ColorDanger600,
  ColorNeutral200,
} from '@defencedigital/design-tokens'

import { DATE_FORMAT } from '../../../src/constants'
import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'
import { transformDates } from '../../../src/components/DatePicker/useInputValue'

describe('DatePickerE', () => {
  describe('when a day is selected', () => {
    before(() => {
      cy.visit(
        '/iframe.html?id=date-picker-experimental--default&viewMode=story'
      )

      cy.get(selectors.datePicker.input).focus()
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
        const expected = transformDates(from, null, DATE_FORMAT.SHORT)

        cy.get(selectors.datePicker.input).should('have.value', expected)
      })

      it('should not be in an error state', { browser: '!firefox' }, () => {
        cy.get(selectors.datePicker.outerWrapper).should(
          'have.css',
          'border',
          `1px solid ${hexToRgb(ColorNeutral200)}`
        )
      })

      it(
        'should not be in an error state (firefox)',
        { browser: 'firefox' },
        () => {
          cy.get(selectors.datePicker.outerWrapper).should(
            'not.have.css',
            'border',
            `1px solid ${hexToRgb(ColorDanger600)}`
          )
        }
      )
    })
  })

  describe('when a range is selected', () => {
    before(() => {
      cy.visit('/iframe.html?id=date-picker-experimental--range&viewMode=story')

      cy.get(selectors.datePicker.input).focus()
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
          const expected = transformDates(from, to, DATE_FORMAT.SHORT)

          cy.get(selectors.datePicker.input).should('have.value', expected)
        })

        describe('and again focuses on the input to subsequently click away', () => {
          before(() => {
            cy.get(selectors.datePicker.input).focus()
            cy.get(selectors.datePicker.input).blur()

            cy.wait(1000)
          })

          it('should not be in an error state', { browser: '!firefox' }, () => {
            cy.get(selectors.datePicker.outerWrapper).should(
              'have.css',
              'border',
              `1px solid ${hexToRgb(ColorAction600)}`
            )
          })

          it(
            'should not be in an error state (firefox)',
            { browser: 'firefox' },
            () => {
              cy.get(selectors.datePicker.outerWrapper).should(
                'not.have.css',
                'border',
                `1px solid ${hexToRgb(ColorDanger600)}`
              )
            }
          )
        })
      })
    })
  })
})
