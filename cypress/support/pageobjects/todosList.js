const todosListSelector = '#todo-list'
const todoItemSelector = '#todo-list li'
const completeTodoToggleSelector = '.toggle'


export const todosList = {
  completeTodo: function () {
    cy.get(completeTodoToggleSelector).check()
  },

  checkIfTodoMarkedAsCompleted: function () {
    cy.get(todoItemSelector).should('have.class', 'completed')
  },

  checkIfTodoNotExists: function (name) {
    cy.get(todosListSelector).then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('not.eql', name)
      //powinno byc zmienione na podejscie z lini 23 - 29 z asersja not.have.memebers
    })
  },

  checkIfAllTodosExists: function (names) {
    const todosOnThePage = []
    cy.get(todoItemSelector).each( ($todo, id) => {
      // cy.wrap($todo.text().trim()).should('be.eql', names[id])
      todosOnThePage.push($todo.text().trim())
    }) 
    cy.wrap(todosOnThePage).should('have.members', names)
  } 
}


