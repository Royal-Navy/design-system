import { before, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

// https://github.com/storybookjs/storybook/issues/8928

describe('ContextMenu', () => {
  describe('Storybook: Docs Mode', () => {
    describe('the user opens the menu', () => {
      before(() => {
        cy.visit('/iframe.html?id=context-menu--default&viewMode=docs')

        cy.get(selectors.contextMenu.target).eq(0).rightclick()
      })

      it('should show the Context Menu unobscured', () => {
        cy.get(selectors.contextMenu.menu)
          .contains('This is too much text')
          .should('be.visible')
      })
    })
  })
})
