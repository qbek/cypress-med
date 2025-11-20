/// <reference types='cypress' />

describe('Test suite to verify todo completiotion', () => {
  it('User can complete a todo', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all')
    cy.get('.new-todo').type(todoToComplete)
    cy.get('.new-todo').type('{enter}')
    // cy.get('.toggle').check()

    cy.get('.todo-list li').should('have.class', 'completed')
    // alternatywne podejscie sprawdzajace czy jest widoczny element z klasą .completed
    // cy.get('li.completed').should('be.visible')
  })

  it('User can filter active todos', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all')
    cy.get('.new-todo').type(todoToComplete)
    cy.get('.new-todo').type('{enter}')
    cy.get('.toggle').check()
    cy.get('[href="#/active"]').click()
    cy.get('.todo-list').should('not.exist')
  })

  it('User can filter completed todos', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all')
    cy.get('.new-todo').type(todoToComplete)
    cy.get('.new-todo').type('{enter}')
    cy.get('.toggle').check()
    cy.get('[href="#/completed"]').click()
    cy.get('.todo-list').should('have.text', todoToComplete)
  })

})
