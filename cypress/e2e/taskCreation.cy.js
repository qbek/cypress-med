import { preconditionSteps } from "../support/steps/preconditionSteps"
import { taskSteps } from "../support/steps/taskSteps"
describe('todoist tasks', () => {


  it('User can add task to the project', () => {
    cy.wrap('jakis tam projekt').as('projectName')
    cy.wrap('jakises tam zadanie').as('taskName')
    
    preconditionSteps.userIsLoggedIn()
    preconditionSteps.userHasProjectCreated()
    taskSteps.userCreatesNewTask()
    taskSteps.userChecksIfTaskWasCreated()

  })

})