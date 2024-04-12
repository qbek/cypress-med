const addNewProjectButton = '[aria-label="My projects menu"]'


export const projectsList = {
  startProjectCreation: function() {
    cy.get(addNewProjectButton).click()
  },

  checkIfExists: function(projectId, expected) {
    cy.get(`#projects_list li[data-id="${projectId}"]`).should('have.text', expected)
  }
}