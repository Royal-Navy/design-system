import { describe, cy, it, before } from 'local-cypress'

import selectors from '../../selectors'

describe('SelectE', () => {
  before(() => {
    cy.visit('/iframe.html?id=select-experimental--default&viewMode=story')
  })

  describe('when the component is focused', () => {
    before(() => {
      cy.get(selectors.selectE.outerWrapper).click()
    })

    it('renders four options', () => {
      cy.get(selectors.selectE.option).should('have.length', 4)
    })

    describe('and `th` is typed', () => {
      before(() => {
        cy.get(selectors.selectE.outerWrapper).type('th{enter}')
      })

      it('sets the value as the item', () => {
        cy.get(selectors.selectE.input).should('have.value', 'Three')
      })
    })
  })
})
