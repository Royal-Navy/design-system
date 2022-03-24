import { cy, describe, expect, it } from 'local-cypress'

import { ACTIVE_TAB_BORDER_TOP } from './constants'
import selectors from '../../selectors'

describe('TabNav - Default', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=tab-nav--default&viewMode=story')
  })

  it('shows the first tab as active', () => {
    const tabItemButtons = cy.get(selectors.tabNav.tabItemButton)
    tabItemButtons.should(($tabItemButton) => {
      expect($tabItemButton.eq(0), 'tab 1').to.have.css(
        'border-top',
        ACTIVE_TAB_BORDER_TOP
      )
      expect($tabItemButton.eq(1), 'tab 2').to.have.css(
        'border-top-style',
        'none'
      )
      expect($tabItemButton.eq(2), 'tab 3').to.have.css(
        'border-top-style',
        'none'
      )
    })
  })
})
