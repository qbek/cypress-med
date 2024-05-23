
import { testData } from "../data/testData"
import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"

export const userPreconditions = {
  isLoggedIn: function () {
    cy.session('user', () => {
      loginSteps.opensLoginPage()
      loginSteps.entersCorrectCreds()
      // let payload = {
      //   "email": "gbinxeqerpnywwysux@awdrt.org",
      //   "password": "ti4FCvBL39i7mMq",
      //   "pkce_oauth": null,
      //   "web_session": true,
      //   "permanent_login": true,
      //   "device_id": "30265dcc-928c-2c1b-d59a-e7ea5692778f"
      // }
      // cy.request('POST', 'https://app.todoist.com/api/v9.1/user/login', payload)
    })
    cy.visit('https://app.todoist.com/app/inbox')
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


