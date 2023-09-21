const projectNameHeader = '[data-testid="view_header"] .simple_content'


export const projectView = {
  assertProjectName: function (name) {
    cy.get(projectNameHeader).should('have.text', name)
  }
}