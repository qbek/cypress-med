const newTodoInputEl = '#new-todo'

export const todoInput = {
  enterTodoNameAndSubmit: function (name) {
    cy.get(newTodoInputEl).type(`${name}{enter}`)
  }
}