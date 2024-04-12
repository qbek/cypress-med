import { preconditionSteps } from "../support/steps/preconditionSteps"
import { taskSteps } from "../support/steps/taskSteps"
import { dataSteps } from "../support/steps/dataSteps"
describe('todoist tasks', () => {
  it('User can add task to the project', () => {
    dataSteps.generateProjectName()
    cy.wrap('jakies tam zadanie').as('taskName')

    preconditionSteps.userHasProjectCreated()
    taskSteps.userCreatesNewTask()
    taskSteps.userChecksIfTaskWasCreated()
  })

})