describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = "Moje zadanie"
    userOpensTodoMVCapp()
    userCreatesANewTodo(todoName)
    userChecksTodoIsCreated(todoName)
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

