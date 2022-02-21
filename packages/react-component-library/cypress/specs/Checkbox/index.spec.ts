/// <reference types="cypress-plugin-tab/src" />
import { beforeEach, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('Checkbox', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=checkbox--default&viewMode=story')
  })

  it('does not check the input by default', () => {
    cy.get(selectors.checkbox.input).should('not.be.checked')
  })

  describe(`when the component is clicked on`, () => {
    beforeEach(() => {
      cy.get(selectors.checkbox.wrapper).click()
    })

    it('checks the input', () => {
      cy.get(selectors.checkbox.input).should('be.checked')
    })

    describe(`and the component is clicked on again`, () => {
      beforeEach(() => {
        cy.get(selectors.checkbox.wrapper).click()
      })

      it('unchecks the input', () => {
        cy.get(selectors.checkbox.input).should('not.be.checked')
      })
    })
  })

  describe('when tab is pressed', () => {
    beforeEach(() => {
      // Make sure the component has rendered before tabbing
      cy.get(selectors.checkbox.input)
      cy.get('body').tab()
    })

    it('focuses the input', () => {
      cy.get(selectors.checkbox.input).should('be.focused')
    })
  })
})
