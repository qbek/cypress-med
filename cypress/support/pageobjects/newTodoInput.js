const NEW_TODO_SELECTOR = '#new-todo'

export const newTodoInput = {
    enterTodoName: function (name) {
        cy.get(NEW_TODO_SELECTOR).type(name)
    },
    submitTodo: function() {
        cy.get(NEW_TODO_SELECTOR).type('{enter}')
    }
}
