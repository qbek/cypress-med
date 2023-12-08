/// <reference types="cypress" />
import { preconditionSteps } from "../support/steps/preconditionSteps"
import { projectSteps } from "../support/steps/projectSteps"
describe("Project creation test", function () {
  it('User can create a new project', function () {
    const projectName = 'Nowy projekt'
    preconditionSteps.userIsLoggedIn()
    projectSteps.userCreatesANewProject(projectName)
    projectSteps.userChecksIfProjectIsCreated(projectName)
  })

  it('Created project is on all projects list', function () {
    const projectName = 'Nowy projekt na list'
    preconditionSteps.userIsLoggedIn()
    projectSteps.userCreatesANewProject(projectName)
    projectSteps.userChecksIfProjectIsOnAllProjectsList(projectName)
  })
})


