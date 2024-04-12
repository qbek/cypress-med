const projectNameEl = '[data-testid="large-header"]'
const addTaskButtonEl = '.plus_add_button'
const projectListViewEl = '[data-testid="project-list-view"]'

export const projectView = {
  checkProjectName: function (expected) {
    cy.get(projectNameEl).should('have.text', expected)
  },
  openNewTaskForm: function () {
    cy.get(addTaskButtonEl).click()
  },
  checkIfTaskExists: function (expected) {
    cy.get(projectListViewEl).should('contain.text', expected)
  }
}