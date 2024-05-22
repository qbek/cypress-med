const addProjectButton = '[aria-label="Add project"]'

export const newProjectType = {
  addProject: function () {
    cy.get(addProjectButton).click()
  } 
}