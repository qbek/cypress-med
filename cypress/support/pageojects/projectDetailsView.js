const projectNameEl = '[data-testid="large-header"]'
const addTaskButtonEl = '.plus_add_button'
const projectListViewEl = '[data-testid="project-list-view"]'


export const projectDetailsView = {
  checkProjectName: function (name) {
    cy.get(projectNameEl).should('have.text', name)
  },
  openNewTaskForm: function () {
    cy.get(addTaskButtonEl).click()
  },

  checkIfTaskExists: function (name) {
    cy.get(projectListViewEl).should('contain.text', name)
  }
}