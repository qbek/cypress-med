/// <reference types="cypress" />
import { preconditionSteps } from "../support/steps/preconditionSteps"
import { projectSteps } from "../support/steps/projectSteps"
describe.only('Project creation', function () {
  it('User creates a new project', function () {
    cy.wrap("To jest moj nowy projekt").as('projectName')

    preconditionSteps.userIsLoggedIn()
    projectSteps.userCreatesANewProject()
    projectSteps.userChecksIfProjectIsCreated()
  })

  it('Created project is added to all projest list', function () {
    var projectName = "To jest moj nowy projekt 2"
    preconditionSteps.userIsLoggedIn()
    projectSteps.userCreatesANewProject(projectName)
    projectSteps.userChecksIfProjectIsOnAllProjectsList(projectName)
  })
})