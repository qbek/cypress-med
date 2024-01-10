import { loginForm } from "../pageojects/loginForm"

const email = 'gbinxeqerpnywwysux@awdrt.org'
const pass = 'ti4FCvBL39i7mMq'

export const loginSteps = {

  userOpensLoginPage: function () {
    cy.visit('https://todoist.com/auth/login')
  },
  userEntersValidCredentials: function () {
    // user enters 'asdgasdgdasg' into email filed
    loginForm.enterEmail(email)
    loginForm.enterPassword(pass)
    loginForm.submitForm()
  },
  userChecksIfLoggedIn: function () {
    cy.get('#loading').should('exist')
    cy.get('#loading').should('not.exist')
    cy.getCookie('todoistd').should('exist')

    
  }
}