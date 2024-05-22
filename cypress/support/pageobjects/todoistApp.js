const loginUrl = 'https://app.todoist.com/auth/login'
const glass = '#loading'
const sessionCookie = 'todoistd'


export const todoistApp = {
  navigateToLoginPage: function () {
    cy.visit(loginUrl)
  },

  waitForGlassToClose: function () {
    cy.get(glass).should('be.visible')
    cy.get(glass).should('not.be.visible')
  },

  checkIfSessionCookieExists: function () {
    cy.getCookie(sessionCookie).should('exist')
  }
}