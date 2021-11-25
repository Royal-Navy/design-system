/// <reference types="cypress" />

declare namespace Cypress {
  /**
   * Assertion that checks if a border property has a certain value on all sides in a way
   * that is compatible with both Chrome and Firefox.
   *
   * @example
   ```
   cy.get('foo').should('has.border', 'color', 'red')
   ```
   */
  interface Chainer<Subject> {
    (
      chainer: 'has.border',
      property: 'color' | 'style' | 'width',
      value: string
    ): Chainable<Subject>
  }
}
