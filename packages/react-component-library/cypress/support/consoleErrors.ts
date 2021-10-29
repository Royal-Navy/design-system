import { Cypress, cy } from 'local-cypress'

function check() {
  let stub

  Cypress.on('window:before:load', (win) => {
    stub = cy.stub(win.console, 'error')
  })

  Cypress.on('command:end', () => {
    if (stub && stub.called) {
      chai
        .expect(stub, 'There should be no console errors')
        .to.have.callCount(0)
    }
  })
}

export default {
  check,
}
