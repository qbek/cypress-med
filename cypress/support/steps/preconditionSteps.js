import { loginSteps } from "./loginSteps"

export const preconditionSteps = {
  userIsLoggedIn: function () {
      loginSteps.userOpensLoginPage()
      loginSteps.userEntersValidCredentials()
      loginSteps.userChecksIfIsLoggedIn()
  }
}