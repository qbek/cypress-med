import { testData } from "../data/testData"
import { projectView } from "../pageobjects/projectView"
import { taskForm } from "../pageobjects/taskEditForm"

export const taskSteps = {
  
  createNewTask: function() {
    testData.defineTaskName()
    projectView.openNewTaskForm()
    cy.get('@taskName').then( (name) => {
      taskForm.enterTaskName(name)
    })
    taskForm.submit()
  },

  checkIfTaskWasCreated: function () {
    cy.get('@taskName').then( (name) => {
      projectView.checkIfTaskExists(name)
    }) 
  }
}


