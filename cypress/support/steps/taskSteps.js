import { projectDetailsView } from "../pageojects/projectDetailsView"
import { taskForm } from "../pageojects/taskForm"

export const taskSteps = {
  userCreatesNewTask: function(name) {
      projectDetailsView.openNewTaskForm()
      taskForm.enterTaskName(name)
      taskForm.submit()
  },

  userChecksIfTaskWasCreated: function (name) {
    projectDetailsView.checkIfTaskExists(name)
  }
}