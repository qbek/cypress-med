const todosListSector = '#todo-list'
const todoItemSelector = '#todo-list li'
const completeTodoToggleSelector = '.toggle'


export const todosList = {
  completeTodo: function () {
    cy.get(completeTodoToggleSelector).check()
  },

  checkIfTodoMarkedAsCompleted: function () {
    cy.get(todoItemSelector).should('have.class', 'completed')
  },

  checkIfTodoExists: function (name) {
    cy.get(todosListSector).then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('be.eql', name)
    })
  },

  checkIfTodoNotExists: function (name) {
    cy.get(todosList).then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('not.eql', name)
    })
  },

  checkIfOneOfTodosIsOnTheList: function (name) {
    cy.get(todosListSector).then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('contain', name)
    })
  } 
}