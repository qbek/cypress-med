export const projectSteps = {
  userCreatesANewProject: function (name) {
    cy.get('[aria-label="Add project"]').click()
    cy.get('#edit_project_modal_field_name').type(name + '{enter}')
  },
  
  userChecksIfProjectIsCreated: function (name) {
    cy.get('[data-testid="view_header"] .simple_content').should('have.text', name + 'sss')
  },
  
  userChecksIfProjectIsOnAllProjectsList: function (name) {
    //istnieje ryzyko ze czesc tej nazwy bedzie w innym projekcie
    cy.get('#projects_list').should('contain.text', name)
  }
}