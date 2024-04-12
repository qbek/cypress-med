/// <reference types="cypress" />
import { projectSteps } from "../support/steps/projectSteps"
import { preconditionSteps } from "../support/steps/preconditionSteps"
describe('Project creation tests', () => {
  
  it('User can create a new project', () => {
    cy.wrap("Moj pierwszy projekt").as('projectName')

    preconditionSteps.userIsLoggedIn()
    projectSteps.createNewProject()
    projectSteps.checkIfProjectCreated()

  })

  it('New created project is added to the list', () => {
    cy.wrap("Moj drugi projekt").as('projectName')

    preconditionSteps.userIsLoggedIn()
    projectSteps.createNewProject()
    projectSteps.checkIfProjectListed()
  })
})

