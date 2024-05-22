
import { userSteps } from "./userSteps"

export const userPreconditions = {
  isLoggedIn: function () {
    userSteps.opensLoginPage()
    userSteps.entersCorrectCreds()
  }
}


