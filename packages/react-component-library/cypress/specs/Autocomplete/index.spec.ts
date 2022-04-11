/// <reference types="cypress-plugin-tab/src" />
import { beforeEach, cy, describe, expect, it } from 'local-cypress'
import {
  ColorDanger800,
  ColorNeutral100,
  ColorNeutral200,
  TypographyS,
} from '@defencedigital/design-tokens'
import { remToPx } from 'polished'

import { hexToRgb } from '../../helpers'
import selectors from '../../selectors'

describe('Autocomplete', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=autocomplete--default&viewMode=story')
  })

  describe('when the component is focused', () => {
    beforeEach(() => {
      cy.get(selectors.select.outerWrapper).click()
    })

    it('renders four options', () => {
      cy.get(selectors.select.option).should('have.length', 4)
    })

    describe('and `hr` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.select.input).type('hr')
      })

      it('renders one option', () => {
        const options = cy.get(selectors.select.option)
        options.should('have.length', 1)
        options.should(($option) => {
          expect($option.eq(0), 'option 1').to.contain.html(
            'T<strong>hr</strong>ee'
          )
        })
      })

      it('does not render the `No results for t` text', () => {
        cy.get(selectors.autocomplete.noResults).should('not.exist')
      })

      it('highlights the first item', () => {
        const options = cy.get(selectors.select.option)

        options.should(($option) => {
          expect($option.eq(0), 'option 1').to.have.css(
            'background-color',
            hexToRgb(ColorNeutral100)
          )
        })
      })

      describe('and the `Three` option is clicked', () => {
        beforeEach(() => {
          cy.get(selectors.select.option).eq(0).click()
        })

        it('sets the value', () => {
          cy.get(selectors.select.input).should('have.value', 'Three')
        })

        it('focuses the toggle button', () => {
          cy.get(selectors.select.toggleButton).should('have.focus')
        })

        describe('and the component is focused', () => {
          beforeEach(() => {
            cy.get(selectors.select.outerWrapper).click()
          })

          it('renders four options', () => {
            cy.get(selectors.select.option).should('have.length', 4)
          })

          it('highlights `Three`', () => {
            cy.get(selectors.select.option)
              .eq(2)
              .should('have.css', 'background-color', hexToRgb(ColorNeutral100))
          })
        })
      })

      describe('and the user tabs out', () => {
        beforeEach(() => {
          cy.get(selectors.select.input).tab()
        })

        it.skip('sets the value to the highlighted item', () => {
          cy.get(selectors.select.input).should('have.value', 'Three')
        })
      })

      describe('and the user escapes out', () => {
        beforeEach(() => {
          cy.get(selectors.select.input).type('{esc}')
        })

        it('focuses the toggle button', () => {
          cy.get(selectors.select.toggleButton).should('have.focus')
        })

        describe('and the down arrow is pressed', () => {
          beforeEach(() => {
            cy.get(selectors.select.toggleButton).type('{downArrow}')
          })

          it('renders four options', () => {
            cy.get(selectors.select.option).should('have.length', 4)
          })
        })
      })

      describe('and the user clicks out', () => {
        beforeEach(() => {
          cy.get('body').click()
        })

        it('shows the field with the entered value in an error state', () => {
          cy.get(selectors.select.input).should('have.value', 'hr')
          cy.get(selectors.select.outerWrapper).should(
            'have.css',
            'box-shadow',
            `${hexToRgb(ColorDanger800)} 0px 0px 0px 3px`
          )
        })

        describe('and the clear button is clicked', () => {
          beforeEach(() => {
            cy.get(selectors.select.clearButton).click()
          })

          it('shows the field without a value not in an error state', () => {
            cy.get(selectors.select.input).should('have.value', '')
            cy.get(selectors.select.outerWrapper).should(
              'have.css',
              'box-shadow',
              `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
            )
          })
        })

        describe('and the user clicks back into the component', () => {
          beforeEach(() => {
            cy.get(selectors.select.outerWrapper).click()
          })

          it('renders one option', () => {
            const options = cy.get(selectors.select.option)
            options.should('have.length', 1)
            options.should(($option) => {
              expect($option.eq(0), 'option 1').to.contain.html(
                'T<strong>hr</strong>ee'
              )
            })
          })

          it('highlights the first item', () => {
            const options = cy.get(selectors.select.option)

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

    describe('and the down arrow is pressed', () => {
      beforeEach(() => {
        cy.get(selectors.select.input).type('{downArrow}')
      })

      it('highlights the first item', () => {
        const options = cy.get(selectors.select.option)

        options.should(($option) => {
          expect($option.eq(0), 'option 1').to.have.css(
            'background-color',
            hexToRgb(ColorNeutral100)
          )
        })
      })
    })

    describe('and `*` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.select.input).type('*')
      })

      it('renders no options', () => {
        const options = cy.get(selectors.select.option)
        options.should('have.length', 0)
      })
    })

    describe('and `z` is typed', () => {
      beforeEach(() => {
        cy.get(selectors.select.input).type('z')
      })

      it('renders no options', () => {
        cy.get(selectors.select.option).should('have.length', 0)
      })

      it('renders the `No results for z` text', () => {
        cy.get(selectors.autocomplete.noResults).should('be.visible')
      })

      describe('and the user clicks away from the component', () => {
        beforeEach(() => {
          cy.get('body').click()
        })

        it('keeps the small label', () => {
          cy.get(selectors.select.label).should(
            'have.css',
            'font-size',
            remToPx(TypographyS)
          )
        })
      })

      describe('and the tab key is pressed', () => {
        beforeEach(() => {
          cy.get(selectors.select.input).tab()
        })

        it('renders the component', () => {
          cy.get(selectors.select.outerWrapper).should('exist')
        })
      })
    })
  })
})
