describe('Create todo feature', () => {
  it('User can create a todo', () => {
    //user opens https://todomvc.com/examples/jquery/dist/#/all
    cy.visit('https://todomvc.com/examples/jquery/dist/#/all')

    //user enters Moje pierwsze zadanie and press enter
    cy.get('#new-todo').type('Moje pierwsze zadanie{enter}')

    //user check if Moje pierwsze zadanie is visible on todos list
    cy.get('#todo-list li label').should('have.text', 'Moje pierwsze zadanie')
  })
})
