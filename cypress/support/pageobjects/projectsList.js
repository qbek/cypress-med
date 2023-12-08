export const projectsList = {
 
  openNewProjectForm: function () {
    cy.get('[aria-label="Add project"]').click()
  },

  assertProjectOnTheList: function (name) {
    cy.get('#projects_list').should('contain.text', name)
  }
}