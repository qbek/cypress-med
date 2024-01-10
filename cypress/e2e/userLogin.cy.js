describe('User login', function () {
  it('User can successfully log in', function () {
    userOpensLoginPage()
    userEntersValidCredentials()
    userChecksIfLoggedIn()
  })
})
   
function userOpensLoginPage () {
  cy.visit('https://todoist.com/auth/login')
}
    
function userEntersValidCredentials () {
  cy.get('#element-0').type('gbinxeqerpnywwysux@awdrt.org')
  cy.get('#element-3').type('ti4FCvBL39i7mMq')
  cy.get('form').submit()
}
  
function userChecksIfLoggedIn () {
  cy.get('#loading').should('exist')
  cy.get('#loading').should('not.exist')
  cy.getCookie('todoistd').should('exist')
}
   