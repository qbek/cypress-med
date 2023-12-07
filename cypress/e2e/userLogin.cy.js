/// <reference types="cypress" />

describe('User login tests', function() {
  it('User can log in', function () {
    userOpensLoginPage()
    userEntersValidCredentials()
    userChecksIfIsLoggedIn()
  })

  it.only('User can create a new project', function () {
    userOpensLoginPage()
    userEntersValidCredentials()
    userChecksIfIsLoggedIn()

    userCreatesANewProject()
    userChecksIfProjectIsCreated()
    userChecksIfProjectIsOnAllProjectsList()
  })
})

function userOpensLoginPage() {
   cy.visit('https://todoist.com/auth/login')
}

function userEntersValidCredentials() {

  cy.get('#element-0').type('gbinxeqerpnywwysux@awdrt.org')
  cy.get('#element-3').type('ti4FCvBL39i7mMq')
  cy.get('form').submit()
}

function userChecksIfIsLoggedIn() {
   cy.get('#loading').should('be.visible')
   cy.get('#loading').should('not.be.visible')
   cy.getCookie('todoistd').should('exist')
}

function userCreatesANewProject() {
  cy.get('[aria-label="Add project"]').click()
  cy.get('#edit_project_modal_field_name').type('To jest moj projekt{enter}')
}

function userChecksIfProjectIsCreated() {
  cy.get('[data-testid="view_header"] .simple_content').should('have.text', 'To jest moj projek')
}

function userChecksIfProjectIsOnAllProjectsList() {
  //istnieje ryzyko ze czesc tej nazwy bedzie w innym projekcie
  cy.get('#projects_list').should('contain.text', 'To jest moj projekt')
}