const newProjectOption = '[aria-label="Add project"]'


export const newProjectTypeForm = {
  selectNewProject: function() {
    cy.get(newProjectOption).click()
  }
}