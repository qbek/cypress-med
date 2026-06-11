/// <reference types='cypress' />


describe('Todo creation feature tests', () => {
    const TODOMVC_URL = 'https://todomvc.com/examples/jquery/dist/#/all'

    it('User can create a todo', () => {
        const todoName = 'My second todo'
        cy.visit(TODOMVC_URL)
        cy.get('#new-todo').type(todoName + '{enter}')
        cy.get('#todo-list label').should('have.text', todoName)  
    })
})