import { loginSteps } from "./loginSteps"

export const preconditions = {

  userIsLoggedIn: function () {
    loginSteps.openLoginPage()
    loginSteps.enterValidCredentials()
    loginSteps.checkIfLoggedIn()
  }


}