import { projectView } from "../pageobjects/projectView"
import { taskForm } from "../pageobjects/taskForm"

export const taskSteps = {
  userCreatesNewTask: function() {
    cy.get('@taskName').then( (name) => {
      projectView.openNewTaskForm()
      taskForm.enterTaskName(name)
      taskForm.submit()
    })
  },

  userChecksIfTaskWasCreated: function () {
    cy.get('@taskName').then( (name) => {
      projectView.checkIfTaskExists(name)
    })   
  }
}