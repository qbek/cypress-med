const projectHeader = '[data-testid="large-header"]'
const addTaskButton = '.plus_add_button'
const projectTasksList = '[data-testid="project-list-view"]'

export const projectView = {
  checkProjectName: function (expected) {
    cy.get(projectHeader).should('have.text', expected)
  },
  
  openNewTaskForm: function () {
    cy.get(addTaskButton).click()
  },
  
  checkIfTaskExists: function (expected) {
    cy.get(projectTasksList).should('contain.text', expected)
  }
}