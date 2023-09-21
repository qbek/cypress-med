/// <reference types="cypress" />

import { preconditions } from "../support/steps/preconditionSteps"
import { projectSteps } from "../support/steps/projectSteps"

describe('todoist projects', () => {

  it('User can create new project', () => {
    const projectName = 'CyPress szkolenie dzien 2'
    preconditions.userIsLoggedIn()
    projectSteps.createNewProject(projectName)
    projectSteps.assertProject(projectName)
  })  
})
