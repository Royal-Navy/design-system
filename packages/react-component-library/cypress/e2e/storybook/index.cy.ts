import { cy } from 'local-cypress'

function getGlobalStyles($document, selectorText) {
  return Array.prototype.flatMap
    .call($document.styleSheets, (styleSheet) => [...styleSheet.cssRules])
    .filter((rule) => rule.selectorText === selectorText)
}

describe('Storybook - global styles', () => {
  describe('canvas tab', () => {
    beforeEach(() => {
      cy.visit('iframe.html?args=&id=button--default&viewMode=story')
    })

    it('renders the global styles once', () => {
      cy.document().should(($document) => {
        expect(getGlobalStyles($document, 'h1')).to.have.length(1)
      })
    })
  })

  describe('docs tab', () => {
    beforeEach(() => {
      cy.visit('iframe.html?args=&id=button--default&viewMode=docs')
    })

    it('renders the global styles once', () => {
      cy.document().should(($document) => {
        expect(getGlobalStyles($document, 'h1')).to.have.length(1)
      })
    })
  })
})
