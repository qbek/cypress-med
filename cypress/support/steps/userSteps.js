export const userSteps = {
  userOpensTodoMVCapp: () => {
    cy.visit('https://todomvc.com/examples/jquery/dist/#/all')
  },

  userCreatesANewTodo: (todoName) => {
    cy.get('#new-todo').type(todoName + '{enter}')
  },

  userChecksTodoIsCreated: (todoName) => {
    cy.get('#todo-list').then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('be.eql', todoName)
    })
  },

  userCompletesTodo: () => {
    cy.get('.toggle').check()
  },

  userChecksIfTodoMarkedAsCompleted: () => {
    cy.get('#todo-list li').should('have.class', 'completed')
  },

  userChecksIfCompletedTodoInNOTOnActiveList: (todoName) => {
    cy.get('#filters [href="#/active"]').click()
    cy.get('#todo-list').then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('not.eql', todoName)
    })
  },

  userChecksIfCompletedTodoIsOnCompletedList: (todoName) => {
    cy.get('#filters [href="#/completed"]').click()
    cy.get('#todo-list').then( ($todoList) => {
      cy.wrap($todoList.text().trim()).should('be.eql', todoName)
    })
  }
}