const addProjectButton = '[aria-label="Add project"]'
const projectListEl = '#projects_list'


export const projectList = {
  addNewProjectClick: function () {
    cy.get(addProjectButton).click()
  },

  assertProjectExists: function (name) {
    cy.get(projectListEl).should('contain.text', name)
  }
}

