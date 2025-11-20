/// <reference types='cypress' />

const TODO_LIST= '.todo-list'
const TODO = '.todo-list li'
const TODO_COMPLETE_TOGGLE = '.toggle'

export let todoList = {
  checkTodoExists: (expectedTodo) => {
    cy.get(TODO_LIST).should('have.text', expectedTodo)
  },

  completeTodo: () => {
    cy.get(TODO_COMPLETE_TOGGLE).check()
  },

  checkTodoMarkedAsCompleted: () => {
    cy.get(TODO).should('have.class', 'completed')
  },

  checkIsEmpty: () => {
    cy.get(TODO_LIST).should('not.exist')
  }
}