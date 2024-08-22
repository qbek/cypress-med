describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = 'Moje zadanie'
    userOpensTodoMVCapp()
    userCreatesANewTodo(todoName)
    userChecksIfTodoIsCreated(todoName)
  })
})

function userOpensTodoMVCapp() {
  cy.visit('https://todomvc.com/examples/jquery/dist/#/all')
}

function userCreatesANewTodo(todoName) {
  cy.get('#new-todo').type(todoName + '{enter}')
}

function userChecksIfTodoIsCreated(todoName) {
  //problem ze zbyt rozbudowanym selektorem
  // cy.get('#todo-list li label').should('have.text', todoName)

  //dziala, ale poza kontekstem cypress
  // cy.get('#todo-list').then( ($list) => {
  //   let allTodos = $list.text()
  //   let trimmedAllTodos = allTodos.trim()
  //   cy.wrap(trimmedAllTodos).should('equal', todoName)
  // })

  cy.get('#todo-list')
    .invoke('text').invoke('trim')
    .should('equal', todoName)
}