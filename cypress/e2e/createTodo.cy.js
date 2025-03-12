describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = "Moje zadanie"
    cy.visit('https://todomvc.com/examples/jquery/dist/#/all')
    cy.get('#new-todo').type(todoName + '{enter}')
    cy.get('#todo-list label').should('hava.text', todoName)
  })
})