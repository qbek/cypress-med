
import { testData } from "../data/testData"
import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"

export const userPreconditions = {
  isLoggedIn: function () {
    loginSteps.opensLoginPage()
    loginSteps.entersCorrectCreds()
  },

  userHasProjectCreated: function (name) {
    this.isLoggedIn()
    // projectSteps.createNewProject(name)
    testData.defineProjectName()
    cy.get('@projectName').then( (name) => {
      cy.request('POST', 'https://api.todoist.com/rest/v2/projects', { name: name })
        .then( (resp) => {
          cy.visit(resp.body.url)
          cy.wrap(resp.body.id).as('projectId')
        })
    })
  }
}


