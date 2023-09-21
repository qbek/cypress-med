export const projectSteps = {
  createNewProject: function (name) {
    cy.get('[aria-label="Add project"]').click()
    cy.get('#edit_project_modal_field_name').type(`${name}{enter}`)
    cy.get('[data-testid="view_header"] .simple_content').should('have.text', name)
  },

  assertProject: function (name) {
    cy.get('[data-testid="view_header"] .simple_content').should('have.text', 'dupa')
    //problem: zbyt luźna asercja, potencjalny false positive ('project 1', 'project 11')
    cy.get('#projects_list').should('contain.text', name)
  }

}