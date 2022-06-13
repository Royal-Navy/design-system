import { cy, describe, it } from 'local-cypress'
import { ColorAction500 } from '@defencedigital/design-tokens'

import selectors from '../../selectors'
import { hexToRgb } from '../../helpers'

const ACTIVE_TAB_BORDER_TOP = `6px solid ${hexToRgb(ColorAction500)}`

describe('TabSet - Default', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=tab-set--default&viewMode=story')
  })

  it('shows the first tab as active', () => {
    cy.get(selectors.tabSet.tabItemButton)
      .eq(0)
      .should('have.css', 'border-top', ACTIVE_TAB_BORDER_TOP)
      .should('have.css', 'font-weight', '700')
  })

  it('shows the second and third tabs as inactive', () => {
    cy.get(selectors.tabSet.tabItemButton)
      .eq(1)
      .should('have.css', 'border-top-style', 'none')
      .should('have.css', 'font-weight', '400')

    cy.get(selectors.tabSet.tabItemButton)
      .eq(2)
      .should('have.css', 'border-top-style', 'none')
      .should('have.css', 'font-weight', '400')
  })

  describe('and the second tab is clicked', () => {
    beforeEach(() => {
      cy.get(selectors.tabSet.tabItemButton).eq(1).click()
    })

    it('shows the second tab as active', () => {
      cy.get(selectors.tabSet.tabItemButton)
        .eq(1)
        .should('have.css', 'border-top', ACTIVE_TAB_BORDER_TOP)
        .should('have.css', 'font-weight', '700')
    })

    it('shows the first and third tabs as inactive', () => {
      cy.get(selectors.tabSet.tabItemButton)
        .eq(0)
        .should('have.css', 'border-top-style', 'none')
        .should('have.css', 'font-weight', '400')

      cy.get(selectors.tabSet.tabItemButton)
        .eq(2)
        .should('have.css', 'border-top-style', 'none')
        .should('have.css', 'font-weight', '400')
    })
  })
})
