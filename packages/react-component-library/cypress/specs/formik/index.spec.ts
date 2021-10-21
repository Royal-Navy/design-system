/* eslint-disable jest/valid-describe */
import { describe, cy, it, before } from 'local-cypress'

import selectors from '../../selectors'

describe('Formik', () => {
  describe(
    'when browsing on desktop',
    {
      viewportHeight: 800,
      viewportWidth: 1200,
    },
    () => {
      before(() => {
        cy.visit('/iframe.html?id=forms-formik--default&viewMode=story')
      })

      it('should render the relevant fields', () => {
        cy.get(selectors.formik.inputEmail).should('be.visible')
        cy.get(selectors.formik.inputPassword).should('be.visible')
        cy.get(selectors.formik.inputDescription).should('be.visible')
      })

      describe('when an empty form is submitted', () => {
        before(() => {
          cy.get(selectors.formik.submit).click()
        })

        it('should show the appropriate validation errors', () => {
          cy.contains('Required').should('be.visible')
        })
      })

      describe('when the user fills in the form successfully', () => {
        before(() => {
          cy.get(selectors.formik.inputEmail).type('hello@world.com')
          cy.get(selectors.formik.inputPassword).type('password')
          cy.get(selectors.formik.inputDescription).type('Hello, World!')
          cy.get(selectors.formik.inputRadio).eq(0).click()
        })

        it('should not show any validation errors', () => {
          cy.contains('Required').should('not.exist')
        })

        describe('when the user submits the form', () => {
          before(() => {
            cy.get(selectors.formik.submit).click()
          })

          it('should set the submit Button state to disabled', () => {
            cy.get(selectors.formik.submit).should('have.attr', 'disabled')
          })

          it('should supply Formik the field values', () => {
            cy.get(selectors.formik.values).contains(
              JSON.stringify(
                {
                  "email": "hello@world.com",
                  "password": "password",
                  "description": "Hello, World!",
                  "exampleCheckbox": [],
                  "exampleRadio": "Option 1"
                },
                null,
                2
              )
            )
          })
        })
      })
    }
  )
})
