const TODO_LIST = '#todo-list'
const TODO_LABEL_SELECTOR = '#todo-list label'
const TODO_ITEM_SELECTOR = '#todo-list li'
const TODO_COMPLETED_TOGGLE = '.toggle'


export const todoList = {
    checkTodoExistsOnList:  function (expectedName) {
        cy.get(TODO_LABEL_SELECTOR).should('have.text', expectedName)
    },

    checkAllTodosExistsOnList: function (expectedNames) {
        cy.wrap(expectedNames).each( function (expected) {
            cy.get(TODO_LIST).should('contain.text', '\n                    ' + expected + '\n')
        })
    },


    checkTodoNOTExistsOnList: function (expectedName) {
        cy.get(TODO_LIST).should('not.contain.text', expectedName)
    },
    completeTodo: function() {
        cy.get(TODO_COMPLETED_TOGGLE).check()
    },
    checkTodoHasCompletedClass: function() {
        cy.get(TODO_ITEM_SELECTOR).should('have.class', 'completed')
    }
}