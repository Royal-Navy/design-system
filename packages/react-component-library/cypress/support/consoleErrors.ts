import { Cypress, cy } from 'local-cypress'

const IGNORED_MESSAGES = [
  // See https://github.com/storybookjs/storybook/issues/18103
  'The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".',
]

function check() {
  let stub

  Cypress.on('window:before:load', (win) => {
    stub = cy.stub(win.console, 'error')
  })

  Cypress.on('command:end', () => {
    if (stub && stub.called) {
      const calls = stub
        .getCalls()
        .filter((call) => !IGNORED_MESSAGES.includes(call.args[0]))
      chai.expect(calls, 'There should be no console errors').to.have.length(0)
    }
  })
}

export default {
  check,
}
