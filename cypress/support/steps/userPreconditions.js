
import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"

export const userPreconditions = {
  isLoggedIn: function () {
    loginSteps.opensLoginPage()
    loginSteps.entersCorrectCreds()
  },

  userHasProjectCreated: function (name) {
    this.isLoggedIn()
    projectSteps.createNewProject(name)
  }
}


