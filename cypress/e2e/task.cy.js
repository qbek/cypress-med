import { userPreconditions } from "../support/steps/userPreconditions"
import { taskSteps } from "../support/steps/taskSteps"
import { projectSteps } from "../support/steps/projectSteps"

describe('tasks', () => {
  it("User can add task to the project", (() => {
    userPreconditions.userHasProjectCreated()
    taskSteps.createNewTask()
    taskSteps.checkIfTaskWasCreated()

    projectSteps.checkIfProjectIsFavorite()
  }))
})