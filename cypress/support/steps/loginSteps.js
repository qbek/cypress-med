import { loginForm } from "../pageobjects/loginForm"
import { todoistApp } from "../pageobjects/todoistApp"

const userEmail = 'gbinxeqerpnywwysux@awdrt.org'
const userPass = 'ti4FCvBL39i7mMq'

export const loginSteps = {
  opensLoginPage: function() {
    todoistApp.navigateToLoginPage()
  },

  entersCorrectCreds: function () {
    this.enterCredentials(userEmail, userPass)
  },

  enterCredentials: function (e, p) {
    loginForm.enterEmail(e)
    loginForm.enterPass(p)
    loginForm.submitForm()
    todoistApp.waitForGlassToClose()
  },

  checkIfIsLoggedIn: function () {
    todoistApp.checkIfSessionCookieExists()
  }
}