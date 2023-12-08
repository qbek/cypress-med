import { projectView } from "../pageobjects/projectView"
import { newTaskForm } from "../pageobjects/newTaskForm"

export const taskSteps = {
  userCreatesNewTask: function(name) {
      projectView.openNewTaskForm()
      newTaskForm.enterTaskName(name)
      newTaskForm.submit()
  },
  
  userChecksIfTaskWasCreated: function (name) {
      projectView.checkIfTaskExists(name)
  }
}