const todoListEl = '#todo-list'
const todoEl = `${todoListEl} li`
const completeToggleEl = `${todoListEl} .toggle`

export const todoList = {
  checkTodoIsVisible: function (name) {
    cy.get(todoListEl)
      .invoke('text').invoke('trim')
      .should('equal', name)
  },

  checkListIsEmpty: function () {
    cy.get(todoEl).should('not.exist')
  },

  checkTodoHasCompletedClass: function () {
    cy.get(todoEl).should('have.class', 'completed')
  },

  completeTodo: function() {
    cy.get(completeToggleEl).check()
  }
}