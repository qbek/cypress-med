
import { userSteps } from "./userSteps"

export const userPreconditions = {
  isLoggedIn: function () {
    userSteps.opensLoginPage()
    userSteps.entersCorrectCreds()
  },

  userHasProjectCreated: function (name) {
    this.isLoggedIn()
    userSteps.createNewProject(name)
  }
}


