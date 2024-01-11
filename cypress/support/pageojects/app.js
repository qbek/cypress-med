const glassEl = '#loading'

export const app = {
  navigateToLoginPage:  function () {
    cy.visit('https://todoist.com/auth/login')
  },
  navigateToProjectView: function () {
    cy.get('@projectId').then(function (projectId) {
      cy.visit('https://app.todoist.com/app/project/' + projectId)
    })   
  },

  waitForGlassToClose: function () {
    cy.get(glassEl, { timeout: 10000}).should('exist')
    cy.get(glassEl, { timeout: 10000}).should('not.exist')
  },
  checkIfSessionCookieExists: function () {
    cy.getCookie('todoistd').should('exist')
  }
}