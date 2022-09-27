/// <reference types="cypress-plugin-tab/src" />
import { ColorAction000 } from '@defencedigital/design-tokens'
import { describe, cy, it, before, beforeEach } from 'local-cypress'

import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'

describe('Select', () => {
  before(() => {
    cy.visit('/iframe.html?id=select--default&viewMode=story')
  })

  it('does not give the expand icon a hover appearance', () => {
    cy.get(selectors.select.toggleIconWrapper).should('not.have.css', 'background-color',  hexToRgb(ColorAction000))
  })

  describe('when the component is focused', { browser: '!firefox' }, () => {
    before(() => {
      cy.get(selectors.select.outerWrapper).click()
    })

    it('renders four options', () => {
      cy.get(selectors.select.option).should('have.length', 4)
    })

    describe('and `t` is typed', () => {
      before(() => {
        cy.get(selectors.select.listBox).type('t{enter}')
      })

      it('sets the value as the item', () => {
        cy.get(selectors.select.input).should(
          'have.value',
          'This is a really, really long select option label that overflows the container when selected'
        )
      })

      describe('and the user hovers on the input', () => {
        beforeEach(() => {
          cy.get(selectors.select.input).trigger('mouseover')
        })

        it('displays a tooltip', () => {
          cy.get(selectors.select.tooltip).should('be.visible')
        })

        it('gives the expand icon a hover appearance', () => {
          cy.get(selectors.select.toggleIconWrapper).should('have.css', 'background-color',  hexToRgb(ColorAction000))
        })
      })
    })

    describe('and the user tabs out', () => {
      beforeEach(() => {
        cy.get(selectors.select.input).tab()
      })

      it.skip('focuses the toggle button', () => {
        cy.get(selectors.select.toggleButton).should('have.focus')
      })
    })
  })
})
