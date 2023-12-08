import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"

export const preconditionSteps = {
  userIsLoggedIn: function () {
      loginSteps.userOpensLoginPage()
      loginSteps.userEntersValidCredentials()
      loginSteps.userChecksIfIsLoggedIn()
  },

  userHasProjectCreated: function (name) {
    // this.userIsLoggedIn()
    projectSteps.userCreatesANewProject(name)
    projectSteps.userChecksIfProjectIsCreated(name)
  }
}