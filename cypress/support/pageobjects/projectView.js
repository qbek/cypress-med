export const projectView = {
  checkProjectName: function (expected) {
    cy.get('[data-testid="large-header"]').should('have.text', expected)
  }
}