import { describe, cy, it, before } from 'local-cypress'

import selectors from '../../selectors'

describe('Form Examples', () => {
  describe(
    'when browsing on desktop',
    {
      viewportHeight: 800,
      viewportWidth: 1200,
    },
    () => {
      const examples = [
        {
          name: 'Formik',
          uri: '/iframe.html?id=forms-formik--default&viewMode=story',
        },
        {
          name: 'react-hook-form',
          uri: '/iframe.html?id=forms-react-hook-form--default&viewMode=story',
        },
      ]

      examples.forEach(({ name, uri }) => {
        describe(name, () => {
          before(() => {
            cy.visit(uri)
          })

          it('should render the relevant fields', () => {
            cy.get(selectors.form.input.email).should('be.visible')
            cy.get(selectors.form.input.password).should('be.visible')
            cy.get(selectors.form.input.description).should('be.visible')
            cy.get(selectors.form.input.switch).should('be.visible')
          })

          describe('when an empty form is submitted', () => {
            before(() => {
              cy.get(selectors.form.submit).click()
            })

            it('should show the appropriate validation errors', () => {
              cy.contains('Required').should('be.visible')
            })
          })

          describe('when the user fills in the form successfully', () => {
            before(() => {
              cy.get(selectors.form.input.email).type('hello@world.com')
              cy.get(selectors.form.input.password).type('password')
              cy.get(selectors.form.input.description).type('Hello, World!')
              cy.get(selectors.form.input.radio).eq(0).click()
              cy.get(selectors.form.input.switchOption).eq(0).click()
            })

            it('should not show any validation errors', () => {
              cy.contains('Required').should('not.exist')
            })

            describe('when the user submits the form', () => {
              before(() => {
                cy.get(selectors.form.submit).click()
              })

              it('should set the submit Button state to disabled', () => {
                cy.get(selectors.form.submit).should('have.attr', 'disabled')
              })

              it('should supply form the field values', () => {
                cy.get(selectors.form.values).contains(
                  JSON.stringify(
                    {
                      email: 'hello@world.com',
                      password: 'password',
                      description: 'Hello, World!',
                      exampleCheckbox: [],
                      exampleRadio: 'Option 1',
                      exampleSwitch: '1',
                    },
                    null,
                    2
                  )
                )
              })
            })
          })
        })
      })
    }
  )
})
