export const loadingGlass = {
  waitForClose: function () {
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
  }
}