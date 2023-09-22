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

  userHasTaskInTheProject: function () {
    projectSteps.createNewProject()
    projectSteps.assertProject()
    taskSteps.create()
    taskSteps.assertTask()
  }
}