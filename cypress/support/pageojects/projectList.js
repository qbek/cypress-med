const newProjectAddEl = '[aria-label="Add project"]'
const projectListEl = '#projects_list'

export const projectList = {
  openNewProjectCreationForm: function () {
    cy.get(newProjectAddEl).click()
  },

  checkProjectExists: function (name) {
    //istnieje ryzyko ze czesc tej nazwy bedzie w innym projekcie
    cy.get(projectListEl).should('contain.text', name)
  }
}