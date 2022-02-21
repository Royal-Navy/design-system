import { before, cy, describe, it, expect } from 'local-cypress'
import { ColorNeutral200, ColorAction500 } from '@defencedigital/design-tokens'

import selectors from '../../selectors'
import { hexToRgb } from '../../helpers'

describe('RangeSlider', () => {
  describe('the user clicks on the rail (beyond selected range)', () => {
    before(() => {
      cy.visit('/iframe.html?id=range-slider--default&viewMode=story')

      cy.get(selectors.rangeSlider.rail).click(800, 0)
    })

    it('should apply focus to the handle', () => {
      cy.get(selectors.rangeSlider.handle.handle).should('have.focus')
    })

    it('should move the handle to that position', () => {
      cy.get(selectors.rangeSlider.handle.value)
        .contains('33')
        .should('be.visible')
    })

    describe('the user clicks on the rail (within selected range)', () => {
      before(() => {
        cy.get(selectors.rangeSlider.rail).click(200, 0)
      })

      it('should move the handle to that position', () => {
        cy.get(selectors.rangeSlider.handle.value)
          .contains('8')
          .should('be.visible')
      })
    })
  })

  describe('thresholds', () => {
    before(() => {
      cy.visit('/iframe.html?id=range-slider--double-threshold&viewMode=story')
    })

    it('renders both thresholds', () => {
      cy.get(selectors.rangeSlider.thresholds.betweenThresholds).should(
        'be.visible'
      )
      cy.get(selectors.rangeSlider.thresholds.aboveThresholds).should(
        'be.visible'
      )
    })

    describe.skip('the user clicks on the rail (below both thresholds)', () => {
      beforeEach(() => {
        cy.get(selectors.rangeSlider.rail).click(0, 0)
      })

      it('should no longer render either threshold', () => {
        cy.get(selectors.rangeSlider.thresholds.betweenThresholds).should(
          'not.be.visible'
        )
        cy.get(selectors.rangeSlider.thresholds.aboveThresholds).should(
          'not.be.visible'
        )
      })
    })
  })

  describe('multiple handles', () => {
    before(() => {
      cy.visit('/iframe.html?id=range-slider--multiple-handles&viewMode=story')
    })

    it('correctly sets each marker active state', () => {
      // [- - * * * * * - -]
      cy.get(selectors.rangeSlider.markers).should(($marker) => {
        expect($marker.eq(0), 'marker 1').to.have.css(
          'background-color',
          hexToRgb(ColorNeutral200)
        )
        expect($marker.eq(1), 'marker 2').to.have.css(
          'background-color',
          hexToRgb(ColorNeutral200)
        )
        expect($marker.eq(2), 'marker 3').to.have.css(
          'background-color',
          hexToRgb(ColorAction500)
        )
        expect($marker.eq(3), 'marker 4').to.have.css(
          'background-color',
          hexToRgb(ColorAction500)
        )
        expect($marker.eq(4), 'marker 5').to.have.css(
          'background-color',
          hexToRgb(ColorAction500)
        )
        expect($marker.eq(5), 'marker 6').to.have.css(
          'background-color',
          hexToRgb(ColorAction500)
        )
        expect($marker.eq(6), 'marker 7').to.have.css(
          'background-color',
          hexToRgb(ColorAction500)
        )
        expect($marker.eq(7), 'marker 8').to.have.css(
          'background-color',
          hexToRgb(ColorNeutral200)
        )
        expect($marker.eq(8), 'marker 9').to.have.css(
          'background-color',
          hexToRgb(ColorNeutral200)
        )
      })
    })
  })
})
