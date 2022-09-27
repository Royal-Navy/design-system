import { before, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('ContextMenu', () => {
  describe('when the menu is opened', () => {
    before(() => {
      cy.visit('/iframe.html?viewMode=docs&id=context-menu--default')

      cy.get(selectors.contextMenu.target)
        .eq(0)
        .rightclick(10, 10, {  scrollBehavior: false })
    })

    it('positions the context menu correctly', () => {
      cy.get(selectors.contextMenu.target).then(($target) => {
        const left = $target.offset().left + 10
        const top = $target.offset().top + 10

        cy.get(selectors.contextMenu.menu)
          .invoke('offset')
          .should('deep.equal', {top, left})
      })
    })
  })
})
