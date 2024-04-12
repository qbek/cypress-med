/// <reference types="cypress" />
import { projectSteps } from "../support/steps/projectSteps"
import { preconditionSteps } from "../support/steps/preconditionSteps"
import { dataSteps } from "../support/steps/dataSteps"
describe('Project creation tests', () => {
  
  it('User can create a new project', () => {
    dataSteps.generateProjectName()

    preconditionSteps.userIsLoggedIn()
    projectSteps.createNewProject()
    projectSteps.checkIfProjectCreated()

  })

  it.only('New created project is added to the list', () => {
    dataSteps.generateProjectName()
    preconditionSteps.userHasProjectCreated()
    projectSteps.checkIfProjectListed()
  })
})

