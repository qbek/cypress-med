const taskNameEl = '[aria-label="Task name"]'
const taskNameInputEl = '[aria-label="Task name"] p'
const taskFromSubmitButtonEl = '[data-testid="task-editor-submit-button"]'

export const taskForm = {
  enterTaskName: function (name) {
    cy.get(taskNameEl).click()
    cy.get(taskNameInputEl).type(name)
  },
  submit: function() {
    cy.get(taskFromSubmitButtonEl).click()
  }
}