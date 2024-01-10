const email = 'gbinxeqerpnywwysux@awdrt.org'
const pass = 'ti4FCvBL39i7mMq'

export const loginSteps = {

  userOpensLoginPage: function () {
    cy.visit('https://todoist.com/auth/login')
  },
  userEntersValidCredentials: function () {
    cy.get('#element-0').type(email)
    cy.get('#element-3').type(pass)
    cy.get('form').submit()
  },
  userChecksIfLoggedIn: function () {
    cy.get('#loading').should('exist')
    cy.get('#loading').should('not.exist')
    cy.getCookie('todoistd').should('exist')
  }
}