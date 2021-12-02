import { before, cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

describe('RangeSliderE', () => {
  describe('the user clicks on the rail (beyond selected range)', () => {
    before(() => {
      cy.visit(
        '/iframe.html?id=range-slider-experimental--default&viewMode=story'
      )

      cy.get(selectors.rangeSliderE.rail).click(800, 0)
    })

    it('should apply focus to the handle', () => {
      cy.get(selectors.rangeSliderE.handle.handle).should('have.focus')
    })

    it('should move the handle to that position', () => {
      cy.get(selectors.rangeSliderE.handle.value)
        .contains('33')
        .should('be.visible')
    })

    describe('the user clicks on the rail (within selected range)', () => {
      before(() => {
        cy.get(selectors.rangeSliderE.rail).click(200, 0)
      })

      it('should move the handle to that position', () => {
        cy.get(selectors.rangeSliderE.handle.value)
          .contains('8')
          .should('be.visible')
      })
    })
  })
})
