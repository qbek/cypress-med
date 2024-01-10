/// <reference types="cypress" />
import { loginSteps } from "../support/steps/loginSteps"
import { projectSteps } from "../support/steps/projectSteps"
describe.only('Project creation', function () {
  it('User creates a new project', function () {
    loginSteps.userOpensLoginPage()
    loginSteps.userEntersValidCredentials()
    loginSteps.userChecksIfLoggedIn()

    var projectName = "To jest moj nowy projekt"
    projectSteps.userCreatesANewProject(projectName)
    projectSteps.userChecksIfProjectIsCreated(projectName)
    projectSteps.userChecksIfProjectIsOnAllProjectsList(projectName)
  })
})


   