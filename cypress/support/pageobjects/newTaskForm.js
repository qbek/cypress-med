const taskNameAria = '[aria-label="Task name"]'
const taskNameInput = '[aria-label="Task name"] p'
const taskFromSubmitButton = '[data-testid="task-editor-submit-button"]'


export const newTaskForm = {
  enterName: function (name) {
    cy.get(taskNameAria).click()
    cy.get(taskNameInput).type(name)
  },
  submit: function() {
    cy.get(taskFromSubmitButton).click()
  }
}