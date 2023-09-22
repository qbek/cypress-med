import { preconditions } from "../support/steps/preconditionSteps"
import { taskSteps } from "../support/steps/taskSteps"

describe('todoist tasks', () => {

  beforeEach( () => {
    preconditions.userIsLoggedIn()
  })

  it('User can add task to the project', () => {
    cy.wrap('Projekt na zadanie').as('projectName')
    cy.wrap('Moje zadanie').as('taskName')

    preconditions.userHasProjectCreated()
    taskSteps.createNewTask()
    taskSteps.assertTask()
  })

})