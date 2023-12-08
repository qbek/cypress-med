const projectNameEl = '[data-testid="view_header"] .simple_content'
const addTaskButton = '.plus_add_button'
const projectListView = '[data-testid="project-list-view"]'

export const projectView = {
  checkProjectName: function (name) {
    cy.get(projectNameEl).should('have.text', name)
  },

  openNewTaskForm: function () {
    cy.get(addTaskButton).click()
  },

  checkIfTaskExists: function (name) {
    cy.get(projectListView).should('contain.text', name)
  }


}