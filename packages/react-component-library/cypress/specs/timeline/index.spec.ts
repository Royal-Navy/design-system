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
  })
})
