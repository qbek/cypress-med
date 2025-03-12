const newTodoInputSelector = '#new-todo'


export const newTodoInput = {
  enterName: function(name) {
      cy.get(newTodoInputSelector).type(name)
  },

  submit: function() {
      cy.get(newTodoInputSelector).type('{enter}')
  }
}