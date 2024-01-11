import { projectDetailsView } from "../pageojects/projectDetailsView"
import { taskForm } from "../pageojects/taskForm"

export const taskSteps = {
  userCreatesNewTask: function() {
    cy.get('@taskName').then(function (name) {
      projectDetailsView.openNewTaskForm()
      taskForm.enterTaskName(name)
      taskForm.submit()
    })
  },

  userChecksIfTaskWasCreated: function () {
    cy.get('@taskName').then(function (name) {
      projectDetailsView.checkIfTaskExists(name)
    })
  }
}