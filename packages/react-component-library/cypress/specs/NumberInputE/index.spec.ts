import { before, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('NumberInputE', () => {
  before(() => {
    cy.visit(
      '/iframe.html?id=number-input-experimental--default&viewMode=story'
    )
  })

  it('renders the number input without a value', () => {
    cy.get(selectors.numberInputE.input).should('have.value', '')
  })

  describe('when the increase button is clicked', () => {
    before(() => {
      cy.get(selectors.numberInputE.increase).click()
    })

    it('should increment the value', () => {
      cy.get(selectors.numberInputE.input).should('have.value', '1')
    })
  })

  describe('when the decrease button is clicked', () => {
    before(() => {
      cy.get(selectors.numberInputE.decrease).click()
    })

    it('should decrement the value', () => {
      cy.get(selectors.numberInputE.input).should('have.value', '0')
    })
  })
})
