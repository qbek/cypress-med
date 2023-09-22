const projectNameHeader = '[data-testid="view_header"] .simple_content'
const projectListView = '[data-testid="project-list-view"]'
const addTaskButton = '.plus_add_button'

export const projectView = {
  assertProjectName: function (name) {
    cy.get(projectNameHeader).should('have.text', name)
  },

  clickAddTask: function() {
    cy.get(addTaskButton).click()
  },

  assertTaskName: function (name) {
    cy.get(projectListView).should('contain.text', name)
  }

}