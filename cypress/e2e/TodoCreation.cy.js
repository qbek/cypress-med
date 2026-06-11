/// <reference types='cypress' />


describe('Todo creation feature tests', () => {
    const TODOMVC_URL = 'https://todomvc.com/examples/jquery/dist/#/all'

    it('User can create a todo', () => {
        const todoName = 'My second todo'
        cy.visit(TODOMVC_URL)
        cy.get('#new-todo').type(todoName + '{enter}')
        cy.get('#todo-list label').should('have.text', todoName)  
    })

    it('User can complete a todo', () => {
        const todoName = 'Completed todo'
        cy.visit(TODOMVC_URL)
        cy.get('#new-todo').type(todoName + '{enter}')
        cy.get('.toggle').check()
        cy.get('#todo-list li').should('have.attr', 'class', ' completed')
        cy.get('#todo-list li').should('have.class', 'completed')

        cy.get('#filters [href="#/active"]').click()
        cy.get('#todo-list').should('not.contain.text', todoName)

        cy.get('#filters [href="#/completed"]').click()
        cy.get('#todo-list label').should('have.text', todoName)
    })
})