import { preconditionSteps } from "../support/steps/preconditionSteps"
import { taskSteps } from "../support/steps/taskSteps"
describe('todoist tasks', () => {

  beforeEach (function () {
    preconditionSteps.userIsLoggedIn()
  }) 

  it('User can add task to the project', () => {
    const projectName = 'Projekt na zadanie'
    const taskName = 'Task w projekcie'

    preconditionSteps.userHasProjectCreated(projectName)
    taskSteps.userCreatesNewTask(taskName)
    taskSteps.userChecksIfTaskWasCreated(taskName)
    
  })

})