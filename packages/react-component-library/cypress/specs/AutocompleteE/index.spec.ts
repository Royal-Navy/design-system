import { beforeEach, cy, describe, expect, it } from 'local-cypress'

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

    describe('and `hr` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('hr')
      })

      it('renders one option', () => {
        const options = cy.get(selectors.selectE.option)
        options.should('have.length', 1)
        options.should(($option) => {
          expect($option.eq(0), 'option 1').to.contain.html(
            'T<strong>hr</strong>ee'
          )
        })
      })

      it('does not render the `No results for t` text', () => {
        cy.get(selectors.autocompleteE.noResults).should('not.exist')
      })

      describe('and the `Three` option is clicked', () => {
        beforeEach(() => {
          cy.get(selectors.selectE.option).eq(0).click()
        })

        it('sets the value', () => {
          cy.get(selectors.selectE.input).should('have.value', 'Three')
        })
      })
    })

    describe('and `*` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('*')
      })

      it('renders no options', () => {
        const options = cy.get(selectors.selectE.option)
        options.should('have.length', 0)
      })
    })

    describe('and `z` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('z')
      })

      it('renders no options', () => {
        cy.get(selectors.selectE.option).should('have.length', 0)
      })

      it('renders the `No results for z` text', () => {
        cy.get(selectors.autocompleteE.noResults).should('be.visible')
      })
    })
  })
})
