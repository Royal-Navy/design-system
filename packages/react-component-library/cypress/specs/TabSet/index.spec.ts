import { cy, describe, it } from 'local-cypress'

import selectors from '../../selectors'

const INITIAL_VIEWPORT_WIDTH = 1400
const VIEWPORT_HEIGHT = 200

function clickNTimes(selector: string, numClicks: number) {
  ;[...Array(numClicks)].forEach(() => {
    cy.get(selector).click()
  })
}

describe('TabSet', () => {
  describe('Scrollable', () => {
    beforeEach(() => {
      cy.viewport(INITIAL_VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
      cy.visit('/iframe.html?id=tab-set--scrollable&viewMode=story')
      cy.get(selectors.tabSet.tabItem).eq(0).as('tabItem')
    })

    describe('when the scroll left button is clicked', () => {
      beforeEach(() => {
        clickNTimes(selectors.tabSet.scrollRight, 1)
      })

      it('scrolls right one tab', () => {
        cy.get('@tabItem').then(($tabItem) => {
          cy.get(selectors.tabSet.tabs)
            .invoke('scrollLeft')
            .should('be.closeTo', $tabItem.outerWidth(), 1)
        })
      })
    })

    describe('when the scroll right button is clicked twice in quick succession', () => {
      beforeEach(() => {
        clickNTimes(selectors.tabSet.scrollRight, 2)
      })

      it('scrolls right two tabs', () => {
        cy.get('@tabItem').then(($tabItem) => {
          cy.get(selectors.tabSet.tabs)
            .invoke('scrollLeft')
            .should('be.closeTo', $tabItem.outerWidth() * 2, 1)
        })
      })

      describe('and scroll left is clicked', () => {
        beforeEach(() => {
          clickNTimes(selectors.tabSet.scrollLeft, 1)
        })

        it('scrolls left one tab', () => {
          cy.get('@tabItem').then(($tabItem) => {
            cy.get(selectors.tabSet.tabs)
              .invoke('scrollLeft')
              .should('be.closeTo', $tabItem.outerWidth(), 1)
          })
        })
      })
    })

    describe('when the scroll right button is clicked ten times', () => {
      beforeEach(() => {
        clickNTimes(selectors.tabSet.scrollRight, 10)
      })

      it('scrolls right as far as possible', () => {
        cy.get(selectors.tabSet.tabs).then(($tabs) => {
          cy.get(selectors.tabSet.tabs)
            .invoke('scrollLeft')
            .should(
              'be.closeTo',
              $tabs[0].scrollWidth - $tabs[0].clientWidth,
              1
            )
        })
      })

      describe('and scroll left is clicked twice', () => {
        beforeEach(() => {
          clickNTimes(selectors.tabSet.scrollLeft, 2)
        })

        it('scrolls left two and half tabs', () => {
          cy.get('@tabItem').then(($tabItem) => {
            cy.get(selectors.tabSet.tabs)
              .invoke('scrollLeft')
              .should('be.closeTo', $tabItem.outerWidth() * 4, 1)
          })
        })
      })

      describe('and scroll left is clicked eight times', () => {
        beforeEach(() => {
          clickNTimes(selectors.tabSet.scrollLeft, 8)
        })

        it('scrolls left all the way', () => {
          cy.get(selectors.tabSet.tabs).invoke('scrollLeft').should('eq', 0)
        })
      })
    })

    describe('when the tab set is scrolled right fully', () => {
      beforeEach(() => {
        cy.get(selectors.tabSet.tabs).invoke('scrollLeft', 9999)
      })

      describe('and the viewport is made narrower by three tab widths', () => {
        beforeEach(() => {
          cy.get('@tabItem').then(($tabItem) => {
            cy.viewport(
              INITIAL_VIEWPORT_WIDTH - $tabItem.outerWidth() * 3,
              VIEWPORT_HEIGHT
            )
          })
        })

        describe('and the scroll right button is clicked once', () => {
          beforeEach(() => {
            clickNTimes(selectors.tabSet.scrollRight, 1)
          })

          it('scrolls right once', () => {
            cy.get('@tabItem').then(($tabItem) => {
              cy.get(selectors.tabSet.tabs)
                .invoke('scrollLeft')
                .should('be.closeTo', $tabItem.outerWidth() * 7, 1)
            })
          })
        })

        describe('and the scroll right button is clicked four times', () => {
          beforeEach(() => {
            clickNTimes(selectors.tabSet.scrollRight, 4)
          })

          it('scrolls right as far as possible', () => {
            cy.get(selectors.tabSet.tabs).then(($tabs) => {
              cy.get(selectors.tabSet.tabs)
                .invoke('scrollLeft')
                .should(
                  'be.closeTo',
                  $tabs[0].scrollWidth - $tabs[0].clientWidth,
                  1
                )
            })
          })
        })

        describe('and the scroll left button is clicked once', () => {
          beforeEach(() => {
            clickNTimes(selectors.tabSet.scrollLeft, 1)
          })

          it('scrolls left once', () => {
            cy.get('@tabItem').then(($tabItem) => {
              cy.get(selectors.tabSet.tabs)
                .invoke('scrollLeft')
                .should('be.closeTo', $tabItem.outerWidth() * 5, 1)
            })
          })
        })

        describe('and the scroll left button is clicked six times', () => {
          beforeEach(() => {
            clickNTimes(selectors.tabSet.scrollLeft, 6)
          })

          it('scrolls left all the way', () => {
            cy.get(selectors.tabSet.tabs).invoke('scrollLeft').should('eq', 0)
          })
        })
      })
    })
  })
})
