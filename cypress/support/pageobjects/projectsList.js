const addNewProjectButton = '[aria-label="My projects menu"]'


export const projectsList = {
  startProjectCreation: function() {
    cy.get(addNewProjectButton).click()
  },

  checkIfExists: function(expected) {
    cy.get('#projects_list').should('contain.text', expected)
  }
  
}