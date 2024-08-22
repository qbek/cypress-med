describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = 'Moje zadanie'
    userOpensTodoMVCapp()
    userCreatesANewTodo(todoName)
    userChecksIfTodoIsCreated(todoName)
  })

  it.only('User can complete todo and filers are working correctly', () => {
    const todoName = 'Zadanie do zakończenia'
    userOpensTodoMVCapp()
    userCreatesANewTodo(todoName)
    userCompletesTodo()
    userChecksIfTodoMarkedAsCompleted()
    userChecksIfCompletedTodoInNOTOnActiveList()
    userChecksIfCompletedTodoIsOnCompletedList(todoName)
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

function userCompletesTodo() {
  cy.get('#todo-list .toggle').check()
}
function userChecksIfTodoMarkedAsCompleted() {
  cy.get('#todo-list li').should('have.class', 'completed')
}
function userChecksIfCompletedTodoInNOTOnActiveList() {
  cy.get('#filters [href="#/active"]').click()
  cy.get('#todo-list li').should('not.exist')
}
function userChecksIfCompletedTodoIsOnCompletedList(todoName) {
  cy.get('#filters [href="#/completed"]').click()
  cy.get('#todo-list')
    .invoke('text').invoke('trim')
    .should('equal', todoName)
}

