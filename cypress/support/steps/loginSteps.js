import { loginForm } from "../pageojects/loginForm"
import { app } from "../pageojects/app"

const email = 'gbinxeqerpnywwysux@awdrt.org'
const pass = 'ti4FCvBL39i7mMq'

export const loginSteps = {

  userOpensLoginPage: function () {
    app.navigateToLoginPage()
  },
  userEntersValidCredentials: function () {
    // user enters 'asdgasdgdasg' into email filed
    loginForm.enterEmail(email)
    loginForm.enterPassword(pass)
    loginForm.submitForm()
  },
  userChecksIfLoggedIn: function () {
    app.waitForGlassToClose()
    app.checkIfSessionCookieExists()
  }
}
