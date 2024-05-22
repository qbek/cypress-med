const taskNameInput = '[aria-label="Task name"] p'
const taskFromSubmitButton = '[data-testid="task-editor-submit-button"]'

export const taskForm = {
  enterTaskName: function (name) {
    cy.get(taskNameInput).type(name)
  },
  submit: function() {
    cy.get(taskFromSubmitButton).click()
  }
}