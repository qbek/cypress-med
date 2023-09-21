/// <reference types="cypress" />

describe('Login functionality', () => {
  it('User can log in to todist', () => {
    cy.visit('https://todoist.com/auth/login')
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
    cy.get('#element-0').type('gbinxeqerpnywwysux@awdrt.org')
    cy.get('#element-3').type('ti4FCvBL39i7mMq')
    cy.get('form').submit()
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
    cy.get('[data-testid="top_bar"]').should('be.visible')
  })
})