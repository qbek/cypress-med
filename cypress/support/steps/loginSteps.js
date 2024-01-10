
export const loginSteps = {
  userOpensLoginPage: function () {
    cy.visit('https://todoist.com/auth/login')
  },
  userEntersValidCredentials: function () {
    cy.get('#element-0').type('gbinxeqerpnywwysux@awdrt.org')
    cy.get('#element-3').type('ti4FCvBL39i7mMq')
    cy.get('form').submit()
  },
  userChecksIfLoggedIn: function () {
    cy.get('#loading').should('exist')
    cy.get('#loading').should('not.exist')
    cy.getCookie('todoistd').should('exist')
  }
}