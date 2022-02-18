/// <reference types="cypress-plugin-tab/src" />
import { beforeEach, cy, describe, expect, it } from 'local-cypress'
import {
  ColorDanger800,
  ColorNeutral100,
  ColorNeutral200,
} from '@defencedigital/design-tokens'

import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'

describe('Autocomplete', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=autocomplete--default&viewMode=story')
  })

  describe('when the component is focused', () => {
    beforeEach(() => {
      cy.get(selectors.selectE.outerWrapper).click()
    })

    it('renders four options', () => {
      cy.get(selectors.selectE.option).should('have.length', 4)
    })

    describe('and `hr` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('hr')
      })

      it('renders one option', () => {
        const options = cy.get(selectors.selectE.option)
        options.should('have.length', 1)
        options.should(($option) => {
          expect($option.eq(0), 'option 1').to.contain.html(
            'T<strong>hr</strong>ee'
          )
        })
      })

      it('does not render the `No results for t` text', () => {
        cy.get(selectors.Autocomplete.noResults).should('not.exist')
      })

      it('highlights the first item', () => {
        const options = cy.get(selectors.selectE.option)

        options.should(($option) => {
          expect($option.eq(0), 'option 1').to.have.css(
            'background-color',
            hexToRgb(ColorNeutral100)
          )
        })
      })

      describe('and the `Three` option is clicked', () => {
        beforeEach(() => {
          cy.get(selectors.selectE.option).eq(0).click()
        })

        it('sets the value', () => {
          cy.get(selectors.selectE.input).should('have.value', 'Three')
        })

        describe('and the component is focused', () => {
          beforeEach(() => {
            cy.get(selectors.selectE.outerWrapper).click()
          })

          it('renders four options', () => {
            cy.get(selectors.selectE.option).should('have.length', 4)
          })

          it('highlights `Three`', () => {
            cy.get(selectors.selectE.option)
              .eq(2)
              .should('have.css', 'background-color', hexToRgb(ColorNeutral100))
          })
        })
      })

      describe('and the user tabs out', () => {
        beforeEach(() => {
          cy.get(selectors.selectE.input).tab()
        })

        it.skip('sets the value to the highlighted item', () => {
          cy.get(selectors.selectE.input).should('have.value', 'Three')
        })
      })

      describe('and the user clicks out', () => {
        beforeEach(() => {
          cy.get('body').click()
        })

        it('shows the field with the entered value in an error state', () => {
          cy.get(selectors.selectE.input).should('have.value', 'hr')
          cy.get(selectors.selectE.outerWrapper).should(
            'have.css',
            'box-shadow',
            `${hexToRgb(ColorDanger800)} 0px 0px 0px 3px`
          )
        })

        describe('and the clear button is clicked', () => {
          beforeEach(() => {
            cy.get(selectors.selectE.clearButton).click()
          })

          it('shows the field without a value not in an error state', () => {
            cy.get(selectors.selectE.input).should('have.value', '')
            cy.get(selectors.selectE.outerWrapper).should(
              'have.css',
              'box-shadow',
              `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
            )
          })
        })

        describe('and the user clicks back into the component', () => {
          beforeEach(() => {
            cy.get(selectors.selectE.outerWrapper).click()
          })

          it('renders one option', () => {
            const options = cy.get(selectors.selectE.option)
            options.should('have.length', 1)
            options.should(($option) => {
              expect($option.eq(0), 'option 1').to.contain.html(
                'T<strong>hr</strong>ee'
              )
            })
          })

          it('highlights the first item', () => {
            const options = cy.get(selectors.selectE.option)

            options.should(($option) => {
              expect($option.eq(0), 'option 1').to.have.css(
                'background-color',
                hexToRgb(ColorNeutral100)
              )
            })
          })
        })
      })
    })

    describe('and `*` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('*')
      })

      it('renders no options', () => {
        const options = cy.get(selectors.selectE.option)
        options.should('have.length', 0)
      })
    })

    describe('and `z` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.selectE.input).type('z')
      })

      it('renders no options', () => {
        cy.get(selectors.selectE.option).should('have.length', 0)
      })

      it('renders the `No results for z` text', () => {
        cy.get(selectors.Autocomplete.noResults).should('be.visible')
      })

      describe('and the user clicks away from the component', () => {
        beforeEach(() => {
          cy.get('body').click()
        })

        it('keeps the small label', () => {
          cy.get(selectors.selectE.label).should(
            'have.css',
            'transform',
            'matrix(0.75, 0, 0, 0.75, 11, 6)'
          )
        })
      })

      describe('and the tab key is pressed', () => {
        beforeEach(() => {
          cy.get(selectors.selectE.input).tab()
        })

        it('renders the component', () => {
          cy.get(selectors.selectE.outerWrapper).should('exist')
        })
      })
    })
  })
})
