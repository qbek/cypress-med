/// <reference types='cypress' />

describe('Todo creation feature tests', () => {
    it('User can create a todo', () => {
        cy.visit('https://todomvc.com/examples/jquery/dist/#/all')
        cy.get('#new-todo').type('My first todo{enter}')
        cy.get('#todo-list label').should('have.text', 'My first todo')  
    })
})