import { loginForm } from "../pageobjects/loginForm"
import { loadingGlass } from "../pageobjects/loadingGlass"

export const loginSteps = {
  openLoginPage: function () {
    cy.visit('https://todoist.com/auth/login')
    loadingGlass.waitForClose()
  },

  enterValidCredentials: function () {
    loginForm.enterMail('gbinxeqerpnywwysux@awdrt.org')
    loginForm.enterPassword('ti4FCvBL39i7mMq')
    loginForm.submitForm()
    loadingGlass.waitForClose()
  },

  checkIfLoggedIn: function () {
    cy.get('[data-testid="top_bar"]').should('be.visible')
  }
}