const projectNameEl = '[data-testid="view_header"] .simple_content'


export const projectView = {
  checkProjectName: function (name) {
    cy.get(projectNameEl).should('have.text', name)
  }
}