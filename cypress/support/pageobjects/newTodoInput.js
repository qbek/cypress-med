/// <reference types='cypress' />

const NEW_TODO_INPUT = '.new-todo'

export let newTodoInput = {
  enterTodoName: (name) => {
    cy.get(NEW_TODO_INPUT).type(name)
  },
  submitTodo: () => {
    cy.get(NEW_TODO_INPUT).type('{enter}')
  }
}

