import { loginSteps } from "./loginSteps"

export const preconditionSteps = {
  userIsLoggedIn: function() {
    loginSteps.openSingInPage()
    loginSteps.enterCorrectCredentials()
    loginSteps.checkIfLoggedIn()
  }
}