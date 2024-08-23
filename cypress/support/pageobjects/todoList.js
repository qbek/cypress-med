const todoListEl = '#todo-list'
const todoEl = `${todoListEl} li`
const completeToggleEl = `${todoListEl} .toggle`

export const todoList = {
  getAllTodoNamesAndSaveInAlias: function (aliasName) {
    const todosFromPage = []
    cy.get(todoEl).each( ($todo) => {
      todosFromPage.push($todo.text().trim())
    })
    cy.wrap(todosFromPage).as(aliasName)
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