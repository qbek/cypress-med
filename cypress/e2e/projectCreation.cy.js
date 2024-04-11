/// <reference types="cypress" />
import { projectSteps } from "../support/steps/projectSteps"
import { preconditionSteps } from "../support/steps/preconditionSteps"
describe('Project creation tests', () => {
  it.only('User can create a new project', () => {
    let projectName = "Moj pierwszy projekt"  
    preconditionSteps.userIsLoggedIn()
    projectSteps.createNewProject(projectName)
    projectSteps.checkIfProjectCreated(projectName)
  })

  it('New created project is added to the list', () => {
    let projectName = "Moj drugi projekt"  
    preconditionSteps.userIsLoggedIn()
    projectSteps.createNewProject(projectName)
    projectSteps.checkIfProjectListed(projectName)
  })
})

