/// <reference types="cypress-plugin-tab/src" />
import { ColorAction000 } from '@defencedigital/design-tokens'
import { describe, cy, it, before, beforeEach } from 'local-cypress'

import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'

describe('Select, disabled', () => {
  before(() => {
    cy.visit('/iframe.html?id=select--disabled&viewMode=story')
  })

  describe('when the input is hovered', () => {
    beforeEach(() => {
      cy.get(selectors.select.input).trigger('mouseover', {force: true})
    })

    it('does not gives the expand icon a hover appearance', () => {
      cy.get(selectors.select.toggleIconWrapper).should('not.have.css', 'background-color',  hexToRgb(ColorAction000))
    })
  })
})
