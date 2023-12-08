import { loginForm } from "../pageobjects/loginForm"
import { loadingGlass } from "../pageobjects/loadingGlass"

export const loginSteps = {
  userOpensLoginPage: function () {
    cy.visit('https://todoist.com/auth/login')
  },

  userEntersValidCredentials: function () {
    loginForm.enterMail('gbinxeqerpnywwysux@awdrt.org')
    loginForm.enterPassword('ti4FCvBL39i7mMq')
    loginForm.submit()  
  },

  userChecksIfIsLoggedIn: function () {
    loadingGlass.isVisible()
    loadingGlass.isNotVisible()
    cy.getCookie('todoistd').should('exist')
  }
}