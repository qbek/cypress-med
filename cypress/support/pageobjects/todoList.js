const TODO_LIST = '#todo-list'
const TODO_LABEL_SELECTOR = '#todo-list label'
const TODO_ITEM_SELECTOR = '#todo-list li'
const TODO_COMPLETED_TOGGLE = '.toggle'


export const todoList = {
    checkAllTodosExistsOnList: function (expectedNames) {
        // cy.wrap(expectedNames).each( function (expected) {
        //     cy.get(TODO_LIST).should('contain.text', '\n                    ' + expected + '\n')
        // })
        var todosFromApp = []
        cy.get(TODO_LABEL_SELECTOR).each( function($label) {
          var todoName = $label.text()
          todosFromApp.push(todoName)
        })

        cy.wrap(todosFromApp).should('deep.equal', expectedNames)
        // cy.wrap(todosFromApp).should('have.members', expectedNames)
        // cy.wrap(todosFromApp).should('include.members', expectedNames)
    },


    checkTodoNOTExistsOnList: function (expectedName) {
        cy.get(TODO_LIST).should('not.contain.text', expectedName)
    },

    completeTodo: function(name) {
        // cy.get(TODO_COMPLETED_TOGGLE).check()
        // specialist way -> fast and short
        cy.contains(TODO_ITEM_SELECTOR, name).find(TODO_COMPLETED_TOGGLE).check()
        
        // generalist -> common solution for all librerries like Selenium, Playwright....
        // cy.get(TODO_ITEM_SELECTOR).each( function ($todoEl) {            
        //     if ( $todoEl.text().trim() == name) {
        //         cy.wrap($todoEl).find(TODO_COMPLETED_TOGGLE).check()
        //         return false;
        //     }
        // })

    },

    checkTodoHasCompletedClass: function(name) {
        cy.contains(TODO_ITEM_SELECTOR, name).should('have.class', 'completed')
    }
}