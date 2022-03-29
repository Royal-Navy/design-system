import { describe, cy, it, before, expect } from 'local-cypress'

import { ACTIVE_TAB_BORDER_TOP } from '../TabNav/constants'
import selectors from '../../selectors'

describe('Masthead', () => {
  before(() => {
    cy.visit('/iframe.html?id=masthead--default&viewMode=story')
  })

  it('shows the banner', () => {
    cy.get(selectors.masthead.banner).should('be.visible')
  })

  it('shows the buttons', () => {
    cy.get(selectors.masthead.buttons.search).should('be.visible')
    cy.get(selectors.masthead.buttons.notifications).should('be.visible')
    cy.get(selectors.masthead.buttons.user).should('be.visible')
  })

  it('shows the navigation', () => {
    const navigationButtons = cy.get(selectors.masthead.navigation.button)

    navigationButtons.should(($option) => {
      expect($option.eq(0), 'navigation button 1').to.have.css(
        'border-top',
        ACTIVE_TAB_BORDER_TOP
      )
      expect($option.eq(1), 'navigation button 2').to.have.css(
        'border-top-style',
        'none'
      )
      expect($option.eq(2), 'navigation button 3').to.have.css(
        'border-top-style',
        'none'
      )
      expect($option.eq(3), 'navigation button 4').to.have.css(
        'border-top-style',
        'none'
      )
    })
  })
})
