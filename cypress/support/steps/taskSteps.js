import { projectView } from "../pageobjects/projectView"
import { newTaskForm } from "../pageobjects/newTaskForm"


export const taskSteps = {
  createNewTask: function () {
    cy.get('@taskName').then(name => {
      projectView.clickAddTask()
      newTaskForm.enterName(name)
      newTaskForm.submit()
    })
  },

  assertTask: function () {
    cy.get('@taskName').then(name => {
      projectView.assertTaskName(name)
    })
  }
}