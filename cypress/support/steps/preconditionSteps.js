import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"
import { app } from "../pageojects/app"

export const preconditionSteps = {
  userIsLoggedIn: function () {
    loginSteps.userOpensLoginPage()
    loginSteps.userEntersValidCredentials()
    loginSteps.userChecksIfLoggedIn()
  },

  userHasProjectCreated: function () {
    // projectSteps.userCreatesANewProject(name)
    // projectSteps.userChecksIfProjectIsCreated(name)


    cy.get('@projectName').then(function (projectName) {
      var payload = {
        name: projectName
      }
      cy.request('POST', 'https://api.todoist.com/rest/v2/projects', payload).then(function (resp) {
        // czyste Chai.js
        // expect(resp.status).to.eq(200)
        cy.wrap(resp).should('include', {status: 200})
        cy.wrap(resp.body.id).as('projectId')
        app.navigateToProjectView()
        app.waitForGlassToClose()
      })
    }) 
  }
}