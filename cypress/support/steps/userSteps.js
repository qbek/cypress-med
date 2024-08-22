
export const userSteps = {
  opensTodoMVCapp: function() {
    cy.visit('https://todomvc.com/examples/jquery/dist/#/all')
  },
  
  createsANewTodo: function(todoName) {
    cy.get('#new-todo').type(todoName + '{enter}')
  },
  
  checksIfTodoIsCreated: function(todoName) {
    cy.get('#todo-list')
      .invoke('text').invoke('trim')
      .should('equal', todoName)
  },
  
  completesTodo: function() {
    cy.get('#todo-list .toggle').check()
  },
  
  checksIfTodoMarkedAsCompleted: function() {
    cy.get('#todo-list li').should('have.class', 'completed')
  },
  
  checksIfCompletedTodoInNOTOnActiveList: function() {
    cy.get('#filters [href="#/active"]').click()
    cy.get('#todo-list li').should('not.exist')
  },
  
  checksIfCompletedTodoIsOnCompletedList: function(todoName) {
    cy.get('#filters [href="#/completed"]').click()
    cy.get('#todo-list')
      .invoke('text').invoke('trim')
      .should('equal', todoName)
  }
}


