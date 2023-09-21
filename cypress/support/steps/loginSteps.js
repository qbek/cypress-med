
export const loginSteps = {
  openLoginPage: function () {
    cy.visit('https://todoist.com/auth/login')
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
  },

  enterValidCredentials: function () {
    cy.get('#element-0').type('gbinxeqerpnywwysux@awdrt.org')
    cy.get('#element-3').type('ti4FCvBL39i7mMq')
    cy.get('form').submit()
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
  },

  checkIfLoggedIn: function () {
    cy.get('[data-testid="top_bar"]').should('be.visible')
  }
}