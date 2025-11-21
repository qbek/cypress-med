/// <reference types='cypress' />

const TODO_LIST= '.todo-list'
const TODO = '.todo-list li'
const TODO_COMPLETE_TOGGLE = '.toggle'
const TODO_DELETE_BUTTON = '.destroy'

export let todoList = {

  checkOnlyTodoExists: (name) => {
    cy.get(TODO_LIST).should('have.text', expectedTodo)
  },

  checkTodoExists: (expectedTodo) => {
    cy.get(TODO_LIST).should('contain.text', expectedTodo)
  },

  completeCreatedTodo: () => {
    cy.get(TODO_COMPLETE_TOGGLE).check()
  },

  checkTodoMarkedAsCompleted: () => {
    cy.get(TODO).should('have.class', 'completed')
  },

  checkIsEmpty: () => {
    cy.get(TODO_LIST).should('not.exist')
  },

  deleteTodo: () => {
    // to nie jest najlepsze rozwiazanie bo robimy force
    cy.get(TODO_DELETE_BUTTON).click({force:true})

    // symulowanie najechania mysza na element (tu nie dziala, ale gdzie indziej....)
    // cy.get(TODO).trigger('mouseover')

    // aleternatywa do najechania jest klikniecie (ale tu też nie działa)
    // cy.get(TODO).click()
    // cy.get(TODO_DELETE_BUTTON).click()
  }
}