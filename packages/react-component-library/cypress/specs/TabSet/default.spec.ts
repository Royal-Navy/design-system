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
  })

  describe('and the second tab is clicked', () => {
    beforeEach(() => {
      cy.get(selectors.tabSet.tabItemButton).eq(1).click()
    })

    it('shows the second tab as active', () => {
      cy.get(selectors.tabSet.tabItemButton)
        .eq(1)
        .should('have.css', 'border-top', ACTIVE_TAB_BORDER_TOP)
    })
  })
})
