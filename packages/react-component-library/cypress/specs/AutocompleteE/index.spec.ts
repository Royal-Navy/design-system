import { beforeEach, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('AutocompleteE', () => {
  beforeEach(() => {
    cy.visit(
      '/iframe.html?id=autocomplete-experimental--default&viewMode=story'
    )
  })

  describe('when the component is focused', () => {
    beforeEach(() => {
      cy.get(selectors.selectE.outerWrapper).click()
    })

    it('renders four options', () => {
      cy.get(selectors.selectE.option).should('have.length', 4)
    })

    describe('and `t` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('t')
      })

      it('renders two options', () => {
        cy.get(selectors.selectE.option).should('have.length', 2)
      })

      describe('and the `Three` option is clicked', () => {
        beforeEach(() => {
          cy.get(selectors.selectE.option).eq(1).click()
        })

        it('sets the value', () => {
          cy.get(selectors.selectE.input).should('have.value', 'Three')
        })
      })
    })
  })
})
