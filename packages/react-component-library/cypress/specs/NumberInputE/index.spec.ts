import { before, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('NumberInputE', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=number-input-experimental--default&viewMode=story'
    )
  })

  it('renders the number input without a value', () => {
    cy.get(selectors.numberInputE.input).should('have.value', '')
  })

  describe('when the increase button is clicked', () => {
    beforeEach(() => {
      cy.get(selectors.numberInputE.increase).click()
    })

    it('should increment the value', () => {
      cy.get(selectors.numberInputE.input).should('have.value', '1')
    })
  })

  describe('when the decrease button is clicked', () => {
    beforeEach(() => {
      cy.get(selectors.numberInputE.decrease).click()
    })

    it('should decrement the value', () => {
      cy.get(selectors.numberInputE.input).should('have.value', '-1')
    })
  })

  const TYPED_VALUE_CASES = [
    ['100.123.456', '100.123456'],
    ['100.123', '100.123'],
    ['100.invalid456', '100.456'],
  ]

  TYPED_VALUE_CASES.forEach(([textToType, expectedValue]) => {
    describe(`when typing "${textToType}"`, () => {
      beforeEach(() => {
        cy.get(selectors.numberInputE.input).type(textToType)
      })

      it(`the value is "${expectedValue}"`, () => {
        cy.get(selectors.numberInputE.input).should('have.value', expectedValue)
      })
    })
  })
})
