const glassEl = '#loading'

export const app = {
  navigateToLoginPage:  function () {
    cy.visit('https://todoist.com/auth/login')
  },
  waitForGlassToClose: function () {
    cy.get(glassEl).should('exist')
    cy.get(glassEl).should('not.exist')
  },
  checkIfSessionCookieExists: function () {
    cy.getCookie('todoistd').should('exist')
  }
}