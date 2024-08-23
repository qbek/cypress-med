const todoListEl = '#todo-list'
const todoEl = `${todoListEl} li`
const completeToggleEl = `${todoListEl} .toggle`

export const todoList = {
  checkTodoIsVisible: function (name) {
    cy.get(todoListEl)
      .invoke('text').invoke('trim')
      .should('equal', name)
  },

  checkOneOfTodoIsVisible: function (name) {
    cy.get(todoListEl)
      .should('contain.text', name)
  },

  checkAllTodosAreVisible: function (todos) {
    //typowe rozwiazanie - sprawdzanie elementu po elemencie 
    // cy.get(todoEl).each( ($todo, index) => {
    //   cy.wrap($todo).invoke('text').invoke('trim').should('equal', todos[index])
    // })
    // cy.get(todoEl).should('have.length', todos.length)


    //aletrnatya: najpierw zbierz wszystko, a potem sprawdz
    const todosFromPage = []
    cy.get(todoEl).each( ($todo) => {
      todosFromPage.push($todo.text().trim())
    })
    
    //lista zawiera wszystkie taski w odpowiedniej kolejnosci
    // cy.wrap(todosFromPage).should('deep.equal', todos)

    //lista zawiera wszystkie taski (i tylko te) - kolejnosc nie jest wazna
    // cy.wrap(todosFromPage).should('have.members', todos)

    //przypadek gdy lista ma zawierac nasze taski i moze zawierac wiecej
    cy.wrap(todosFromPage).should('include.members', todos)
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