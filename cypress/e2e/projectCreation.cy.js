/// <reference types="cypress" />
import { userSteps } from "../support/steps/userSteps"
describe('Project creation tests', () => {
  it('User can create a new project', () => {
    let projectName = "Moj pierwszy projekt"  
    userSteps.openSingInPage()
    userSteps.enterCorrectCredentials()

    userSteps.createNewProject(projectName)
    userSteps.checkIfProjectCreated(projectName)
  })

  it('New created project is added to the list', () => {
    let projectName = "Moj drugi projekt"  
    userSteps.openSingInPage()
    userSteps.enterCorrectCredentials()

    userSteps.createNewProject(projectName)
    userSteps.checkIfProjectListed(projectName)
  })
})