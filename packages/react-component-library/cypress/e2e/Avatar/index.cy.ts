import { beforeEach, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('Avatar', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=avatar--default&viewMode=story')
  })

  it('should render the avatar', () => {
    cy.get(selectors.avatar.content).should('have.text', 'AT')
  })
})
