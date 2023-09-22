import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"
import { loadingGlass } from "../pageobjects/loadingGlass"

export const preconditions = {

  userIsLoggedIn: function () {
    // loginSteps.openLoginPage()
    // loginSteps.enterValidCredentials()
    // loginSteps.checkIfLoggedIn()

    const body = {
      email: "gbinxeqerpnywwysux@awdrt.org",
      password: "ti4FCvBL39i7mMq",
      web_session: true
    }

    cy.request('POST', 'https://todoist.com/API/v9.1/user/login', body)
    cy.visit('https://todoist.com')
    loadingGlass.waitForClose()
  },

  userHasProjectCreated: function () {
    projectSteps.createNewProject()
    projectSteps.assertProject()
  },

  userHasProjectCreatedRest: function () {
    cy.get('@projectName').then (projectName => {
      cy.request('POST', 'https://api.todoist.com/rest/v2/projects', { name: projectName})
        .then( response => {
          cy.wrap(response.body.id).as('projectId')
        })
    })
    cy.get('@projectId').then(id => {
      cy.log("projectId", id)
    })
    loadingGlass.waitForClose()
    cy.wait(5000)
  },

  userHasTaskInTheProject: function () {
    projectSteps.createNewProject()
    projectSteps.assertProject()
    taskSteps.create()
    taskSteps.assertTask()
  }
}