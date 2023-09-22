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

  },

  userHasProjectCreated: function () {
    cy.get('@projectName').then (projectName => {
      cy.request('POST', 'https://api.todoist.com/rest/v2/projects', { name: projectName})
        .then( response => {
          expect(response.status).to.eq(200)
          cy.wrap(response.body).as('projectInfo')
          cy.visit(`https://todoist.com/app/project/${response.body.id}`)
        })
    })
    
    loadingGlass.waitForClose()
  },

  userHasTaskInTheProject: function () {
    projectSteps.createNewProject()
    projectSteps.assertProject()
    taskSteps.create()
    taskSteps.assertTask()
  }
}