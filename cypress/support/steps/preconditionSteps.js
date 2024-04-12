import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"

export const preconditionSteps = {
  userIsLoggedIn: function() {
      loginSteps.openSingInPage()
      loginSteps.enterCorrectCredentials()
      loginSteps.checkIfLoggedIn()
  },

  userHasProjectCreated: function () {
    this.userIsLoggedIn()
    projectSteps.createNewProject()
  }
}