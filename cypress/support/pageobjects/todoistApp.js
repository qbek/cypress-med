const glass = '#loading'
const todoistLoginPage = 'https://app.todoist.com/auth/login'

export const todoistApp = {
  openLoginPage: function () {
    cy.visit(todoistLoginPage)
  },

  waitForGlassToClose:  function () {
    cy.get(glass).should('be.visible')
    cy.get(glass, { timeout: 10000}).should('not.be.visible')
  },

  checkUserCookie: function() {
    cy.getCookie('todoistd').should('exist')
  }
}