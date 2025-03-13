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

  checkIfOneOfTodosIsOnTheList: function (names) {
    // podejscie tradycyjne - element po elemencie
    // cy.get(todoItemSelector).each( ($todo, id) => {
    //   cy.wrap($todo.text().trim()).should('be.eql', names[id])
    // })  
    // cy.get(todoItemSelector).should('have.length', names.length)
    
    const todosOnThePage = []
    cy.get(todoItemSelector).each( ($todo, id) => {
      // cy.wrap($todo.text().trim()).should('be.eql', names[id])
      todosOnThePage.push($todo.text().trim())
    }) 

    //sprawdzenie czy wszystkie elementy wystepuja w tej samej kolejnosci
    // cy.wrap(todosOnThePage).should('deep.equal', names)

    //sprawdzenie czy sa wszystkie elementy - koejnosc nie ma znaczenia
    cy.wrap(todosOnThePage).should('have.members', names)

    //sprawdzenie czy elementy sa na liscie, ale moga tez byc inne
    // cy.wrap(todosOnThePage).should('include.members', names)

  } 
}


