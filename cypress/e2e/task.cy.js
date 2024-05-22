import { userPreconditions } from "../support/steps/userPreconditions"
import { userSteps } from "../support/steps/userSteps"

describe('tasks', () => {
  it("User can add task to the project", (() => {
    let projectName = "Projekt na zadanie"
    let taskName = "Moje zadanie"

    userPreconditions.userHasProjectCreated(projectName)
    userSteps.createNewTask(taskName)
    userSteps.checkIfTaskWasCreated(taskName)
  }))
})