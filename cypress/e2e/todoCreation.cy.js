/// <reference types='cypress' />

describe('Test suite for todo creatin tests', () => {
  it('User can creata a todo', () => {
    let todoName = 'lepsze zadanie'

    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all')
    cy.get('.new-todo').type(todoName + '{enter}')
    cy.get('.todo-list').should('have.text', todoName)
    cy.get('.todo-list label').should('have.text', todoName)
    cy.get('.todo-list').find('label').should('have.text', todoName)
    // cy.contains('Updated by the TodoMVC Team')
    // cy.get('.todo-list').contains('Updated by the TodoMVC Team')//.should('be.visible')
  })
})