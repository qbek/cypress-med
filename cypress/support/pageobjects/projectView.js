const projectHeader = '[data-testid="large-header"]'


export const projectView = {
  checkProjectName: function (expected) {
    cy.get(projectHeader).should('have.text', expected)
  }
}