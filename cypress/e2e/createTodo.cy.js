/// <reference types='cypress' />
describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = "Moje zadanie"
    userOpensTodoMVCapp()
    userCreatesANewTodo(todoName)
    userChecksTodoIsCreated(todoName)
  })

  it.only('User can complete a todo', () => {
    const todoName = "Zakonczone zadanie"
    userOpensTodoMVCapp()
    userCreatesANewTodo(todoName)
    userCompletesTodo()
    userChecksIfTodoMarkedAsCompleted()
    userChecksIfCompletedTodoInNOTOnActiveList(todoName)
    userChecksIfCompletedTodoIsOnCompletedList(todoName)
  })
})

function userOpensTodoMVCapp() {
  cy.visit('https://todomvc.com/examples/jquery/dist/#/all')
}

function userCreatesANewTodo(todoName) {
  cy.get('#new-todo').type(todoName + '{enter}')
}

function userChecksTodoIsCreated(todoName) {
  //bardziej robudowany selektor, ale prostszy kod
  cy.get('#todo-list label').should('have.text', todoName)

  //jeżeli chcecie mieć krótsze selektory, ale bardziej skomplikowany kod
  cy.get('#todo-list').then( ($todoList) => {
    cy.wrap($todoList.text().trim()).should('be.eql', todoName)
  })
}
function userCompletesTodo() {
  cy.get('.toggle').check()
}
function userChecksIfTodoMarkedAsCompleted() {
  cy.get('#todo-list li').should('have.class', 'completed')
}
function userChecksIfCompletedTodoInNOTOnActiveList(todoName) {
  cy.get('#filters [href="#/active"]').click()
  cy.get('#todo-list').then( ($todoList) => {
    cy.wrap($todoList.text().trim()).should('not.eql', todoName)
  })
}
function userChecksIfCompletedTodoIsOnCompletedList(todoName) {
  cy.get('#filters [href="#/completed"]').click()
  cy.get('#todo-list').then( ($todoList) => {
    cy.wrap($todoList.text().trim()).should('be.eql', todoName)
  })
}

