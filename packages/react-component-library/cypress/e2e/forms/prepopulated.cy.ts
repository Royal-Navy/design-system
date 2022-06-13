import { describe, cy, expect, it, before } from 'local-cypress'

import selectors from '../../selectors'

const expectedInitialResult = {
  email: 'example@email.test',
  password: 'example-password',
  description: 'Example description',
  exampleCheckbox: ['Option 2'],
  exampleRadio: 'Option 2',
  exampleSwitch: '2',
  exampleNumberInput: 156,
  exampleDatePicker: '2022-02-10T00:00:00.000Z',
  exampleSelect: 'three',
  exampleAutocomplete: 'two',
  exampleRangeSlider: [4],
}

const expectedEditedResult = {
  email: 'hello@world.com',
  password: 'password',
  description: 'Hello, World!',
  exampleCheckbox: ['Option 1', 'Option 2'],
  exampleRadio: 'Option 1',
  exampleSwitch: '1',
  exampleNumberInput: 157,
  exampleDatePicker: '2022-01-31T12:00:00.000Z',
  exampleSelect: 'three',
  exampleAutocomplete: 'four',
  exampleRangeSlider: [28],
}

const getSelect = () =>
  cy.contains(selectors.form.input.select, 'Example select')

const getAutocomplete = () =>
  cy.contains(selectors.form.input.select, 'Example autocomplete')

describe('Form Examples (pre-populated)', () => {
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
          uri: '/iframe.html?id=forms-usage-formik--prepopulated&viewMode=story',
        },
        {
          name: 'react-hook-form',
          uri: '/iframe.html?id=forms-usage-react-hook-form--prepopulated&viewMode=story',
        },
        {
          name: 'Native',
          uri: '/iframe.html?id=forms-usage-native--prepopulated&viewMode=story',
        },
      ]

      examples.forEach(({ name, uri }) => {
        describe(name, () => {
          before(() => {
            cy.visit(uri)
          })

          it('renders the form fields', () => {
            cy.get(selectors.form.input.email).should('be.visible')
            cy.get(selectors.form.input.password).should('be.visible')
            cy.get(selectors.form.input.description).should('be.visible')
            cy.get(selectors.form.input.radio).should('be.visible')
            cy.get(selectors.form.input.checkbox).should('be.visible')
            cy.get(selectors.form.input.switch).should('be.visible')
            cy.get(selectors.form.input.numberInput).should('be.visible')
            cy.get(selectors.form.input.datePicker).should('be.visible')
            getSelect().should('be.visible')
            getAutocomplete().should('be.visible')
            cy.get(selectors.form.input.rangeSlider).should('be.visible')
          })

          describe('when the form is submitted unchanged', () => {
            before(() => {
              cy.get(selectors.form.submit).click()
            })

            it('does not show any validation errors', () => {
              cy.contains('Required').should('not.exist')
            })

            it('submits the existing data', () => {
              cy.get(selectors.form.values)
                .invoke('text')
                .should((submittedData) => {
                  expect(JSON.parse(submittedData)).to.deep.equal(
                    expectedInitialResult
                  )
                })
            })
          })

          describe('when the user edits the form data', () => {
            before(() => {
              cy.get(selectors.form.input.email).type(
                '{selectall}hello@world.com'
              )
              cy.get(selectors.form.input.password).type('{selectall}password')
              cy.get(selectors.form.input.description).type(
                '{selectall}Hello, World!'
              )
              cy.get(selectors.form.input.radio).eq(0).click()
              cy.get(selectors.form.input.checkbox).eq(0).click()
              cy.get(selectors.form.input.switchOption).eq(0).click()
              cy.get(selectors.form.input.numberInputIncrease).click()
              cy.get(selectors.form.input.datePickerInput).type(
                '{selectall}31/01/2022'
              )
              getSelect().type('th{enter}')
              getAutocomplete().type('{selectall}fo{downArrow}{enter}')
              cy.get(selectors.form.input.rangeSliderRail).click(800, 0)
            })

            it('does not show any validation errors', () => {
              cy.contains('Required').should('not.exist')
            })

            describe('when the user submits the form', () => {
              before(() => {
                cy.get(selectors.form.submit).click()
              })

              it('submits the updated field values', () => {
                cy.get(selectors.form.values)
                  .invoke('text')
                  .should((submittedData) => {
                    const parsedData = JSON.parse(submittedData)
                    parsedData.exampleCheckbox.sort()
                    expect(parsedData).to.deep.equal(expectedEditedResult)
                  })
              })
            })
          })
        })
      })
    }
  )
})
