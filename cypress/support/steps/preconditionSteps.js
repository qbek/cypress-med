import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"

export const preconditionSteps = {
  userIsLoggedIn: function () {
    loginSteps.userOpensLoginPage()
    loginSteps.userEntersValidCredentials()
    loginSteps.userChecksIfLoggedIn()
  },

  userHasProjectCreated: function (name) {
    projectSteps.userCreatesANewProject(name)
    projectSteps.userChecksIfProjectIsCreated(name)
  }
}