import { before, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('NumberInput', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=number-input--default&viewMode=story')
  })

  it('renders the number input without a value', () => {
    cy.get(selectors.NumberInput.input).should('have.value', '')
  })

  describe('when the increase button is clicked', () => {
    beforeEach(() => {
      cy.get(selectors.NumberInput.increase).click()
    })

    it('should increment the value', () => {
      cy.get(selectors.NumberInput.input).should('have.value', '1')
    })
  })

  describe('when the decrease button is clicked', () => {
    beforeEach(() => {
      cy.get(selectors.NumberInput.decrease).click()
    })

    it('should decrement the value', () => {
      cy.get(selectors.NumberInput.input).should('have.value', '-1')
    })
  })

  const TYPED_VALUE_CASES = [
    ['100.123.456', '100.123456'],
    ['100.123', '100.123'],
    ['100.invalid456', '100.456'],
    ['100.25{home}.25', '25100.25'],
    ['-100.123', '-100.123'],
    ['-100.1-23', '-100.123'],
    ['100.1-23', '100.123'],
    ['12.34{selectall}56.78', '56.78'],
    ['-12.34{selectall}-56.78', '-56.78'],
  ]

  TYPED_VALUE_CASES.forEach(([textToType, expectedValue]) => {
    describe(`when typing "${textToType}"`, () => {
      beforeEach(() => {
        cy.get(selectors.NumberInput.input).type(textToType)
      })

      it(`the value is "${expectedValue}"`, () => {
        cy.get(selectors.NumberInput.input).should('have.value', expectedValue)
      })
    })
  })
})
