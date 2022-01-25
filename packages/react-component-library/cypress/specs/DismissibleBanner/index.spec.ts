import { beforeEach, cy, describe, expect, it } from 'local-cypress'

import selectors from '../../selectors'

describe('DismissibleBanner', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=dismissible-banner--default&viewMode=story')
  })

  it('should render the dismissible banner', () => {
    cy.get(selectors.dismissibleBanner.title).should(
      'have.text',
      'Example Title'
    )
    cy.get(selectors.dismissibleBanner.description).should(
      'have.text',
      'Example description'
    )
    cy.get(selectors.dismissibleBanner.checkbox).should('exist')
    cy.get(selectors.dismissibleBanner.dismiss).should('be.visible')
  })
})
