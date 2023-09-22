/// <reference types="cypress" />

import { preconditions } from "../support/steps/preconditionSteps"
import { projectSteps } from "../support/steps/projectSteps"

describe('todoist projects', () => {

  it('User can create new project', () => {
    //setter dla danej testowej
    cy.wrap('CyPress szkolenie dzien 3').as('projectName')
    preconditions.userIsLoggedIn()
    projectSteps.createNewProject()
    projectSteps.assertProject()
  })  
})


