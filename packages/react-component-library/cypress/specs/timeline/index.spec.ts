import { describe, cy, it, before } from 'local-cypress'
import { DEFAULTS } from '../../../src/components/Timeline/constants'
import selectors from '../../selectors'

describe('Compound Timeline', () => {
  describe('full width', () => {
    before(() => {
      cy.visit('/iframe.html?id=compound-timeline--full-width&viewMode=story')
    })

    it('should render the month', () => {
      cy.get(selectors.timeline.month).eq(0).should('have.text', 'October 2020')
      cy.get(selectors.timeline.month).should('have.length', 1)
    })

    it('should render the weeks', () => {
      cy.get(selectors.timeline.week).eq(0).should('have.text', '28/09')
      cy.get(selectors.timeline.week).eq(1).should('have.text', '05/10')
      cy.get(selectors.timeline.week).eq(2).should('have.text', '12/10')
      cy.get(selectors.timeline.week).eq(3).should('have.text', '19/10')
      cy.get(selectors.timeline.week).eq(4).should('have.text', '26/10')
      cy.get(selectors.timeline.week).should('have.length', 5)
    })

    it('should render the days', () => {
      cy.get(selectors.timeline.day).should('have.length', 31)
    })

    it.skip('should not render the hours', () => {
      cy.get(selectors.timeline.hour).should('have.length', 0)
    })

    it('should render the events', () => {
      cy.get(selectors.timeline.event).eq(0).should('have.text', 'Event 1')
      cy.get(selectors.timeline.event).eq(1).should('have.text', 'Event 2')
      cy.get(selectors.timeline.event).should('have.length', 2)
    })

    it('should fill the width', () => {
      cy.get(selectors.timeline.month).should('have.css', 'width', '1023px')
    })

    describe('resize window', () => {
      before(() => {
        cy.viewport(1500, 768)
      })

      it('should fill the width', () => {
        cy.get(selectors.timeline.month).should('have.css', 'width', '1499px')
      })
    })

    describe('toolbar', () => {
      describe('navigating left', () => {
        before(() => {
          cy.reload()
          cy.get(selectors.timeline.toolbar.navigateLeft).click()
        })

        it('should move to the previous month', () => {
          cy.get(selectors.timeline.month)
            .eq(0)
            .should('have.text', 'September 2020')
        })

        describe('and the window is resized', () => {
          before(() => {
            cy.viewport(1500, 768)
            cy.wait(500)
          })

          it('should still be on the previous month', () => {
            cy.get(selectors.timeline.month)
              .eq(0)
              .should('have.text', 'September 2020')
          })
        })
      })

      describe('navigating right', () => {
        before(() => {
          cy.reload()
          cy.get(selectors.timeline.toolbar.navigateRight).click()
        })

        it('should move to the next month', () => {
          cy.get(selectors.timeline.month)
            .eq(0)
            .should('have.text', 'November 2020')
          cy.get(selectors.timeline.month).should('have.length', 1)
        })

        describe('and the window is resized', () => {
          before(() => {
            cy.viewport(1500, 768)
            cy.wait(500)
          })

          it('should still be on the next month', () => {
            cy.get(selectors.timeline.month)
              .eq(0)
              .should('have.text', 'November 2020')
          })
        })
      })

      describe('zooming in once', () => {
        before(() => {
          cy.reload()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
        })

        it('should render the month', () => {
          cy.get(selectors.timeline.month)
            .eq(0)
            .should('have.text', 'October 2020')
          cy.get(selectors.timeline.month).should('have.length', 1)
        })

        it('should render the weeks', () => {
          cy.get(selectors.timeline.week).eq(0).should('have.text', '28/09')
          cy.get(selectors.timeline.week).eq(1).should('have.text', '05/10')
          cy.get(selectors.timeline.week).should('have.length', 2)
        })

        it('should render the days', () => {
          cy.get(selectors.timeline.day).should('have.length', 7)
        })

        it.skip('should render the hours', () => {
          cy.get(selectors.timeline.hour).should('have.length', 28)
        })

        it('should render the events', () => {
          cy.get(selectors.timeline.event).eq(0).should('have.text', 'Event 2')
          cy.get(selectors.timeline.event).should('have.length', 1)
        })

        it('should fill the width', () => {
          cy.get(selectors.timeline.month).should('have.css', 'width', '1023px')
        })

        describe('and the window is resized', () => {
          before(() => {
            cy.viewport(1500, 768)
            cy.wait(500)
          })

          it.skip('should still be at the same zoom level', () => {
            cy.get(selectors.timeline.hour).should('have.length', 28)
          })
        })
      })

      describe('zooming in twice', () => {
        before(() => {
          cy.reload()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
        })

        it('should render the month', () => {
          cy.get(selectors.timeline.month)
            .eq(0)
            .should('have.text', 'October 2020')
          cy.get(selectors.timeline.month).should('have.length', 1)
        })

        it('should render the weeks', () => {
          cy.get(selectors.timeline.week).eq(0).should('have.text', '28/09')
          cy.get(selectors.timeline.week).eq(1).should('have.text', '05/10')
          cy.get(selectors.timeline.week).should('have.length', 2)
        })

        it('should render the days', () => {
          cy.get(selectors.timeline.day).should('have.length', 5)
        })

        it.skip('should render the hours', () => {
          cy.get(selectors.timeline.hour).should('have.length', 20)
        })

        it('should render the events', () => {
          cy.get(selectors.timeline.event).eq(0).should('have.text', 'Event 2')
          cy.get(selectors.timeline.event).should('have.length', 1)
        })

        it('should fill the width', () => {
          cy.get(selectors.timeline.month).should('have.css', 'width', '1023px')
        })
      })

      describe('zooming in thrice', () => {
        before(() => {
          cy.reload()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
        })

        it('should render the month', () => {
          cy.get(selectors.timeline.month)
            .eq(0)
            .should('have.text', 'October 2020')
          cy.get(selectors.timeline.month).should('have.length', 1)
        })

        it('should render the weeks', () => {
          cy.get(selectors.timeline.week).eq(0).should('have.text', '28/09')
          cy.get(selectors.timeline.week).should('have.length', 1)
        })

        it('should render the days', () => {
          cy.get(selectors.timeline.day).should('have.length', 3)
        })

        it.skip('should render the hours', () => {
          cy.get(selectors.timeline.hour).should('have.length', 12)
        })

        it('should render the events', () => {
          cy.get(selectors.timeline.event).eq(0).should('have.text', 'Event 2')
          cy.get(selectors.timeline.event).should('have.length', 1)
        })

        it('should fill the width', () => {
          cy.get(selectors.timeline.month).should('have.css', 'width', '1023px')
        })
      })

      describe('zooming in four times', () => {
        before(() => {
          cy.reload()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
          cy.get(selectors.timeline.toolbar.zoomIn).click()
        })

        it('should render the month', () => {
          cy.get(selectors.timeline.month)
            .eq(0)
            .should('have.text', 'October 2020')
          cy.get(selectors.timeline.month).should('have.length', 1)
        })

        it('should render the weeks', () => {
          cy.get(selectors.timeline.week).eq(0).should('have.text', '28/09')
          cy.get(selectors.timeline.week).should('have.length', 1)
        })

        it('should render the days', () => {
          cy.get(selectors.timeline.day).should('have.length', 1)
        })

        it.skip('should render the hours', () => {
          cy.get(selectors.timeline.hour).should('have.length', 24)
        })

        it('should render the events', () => {
          cy.get(selectors.timeline.event).should('have.length', 0)
        })

        it('should fill the width', () => {
          cy.get(selectors.timeline.month).should('have.css', 'width', '1023px')
        })
      })
    })

    describe('small screen', () => {
      before(() => {
        cy.viewport(800, 600)
      })

      it('should be the minimum width', () => {
        const width = DEFAULTS.UNIT_WIDTH * 31
        cy.get(selectors.timeline.month).should(
          'have.css',
          'width',
          `${width}px`
        )
      })
    })
  })
})
