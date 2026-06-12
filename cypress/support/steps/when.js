import { newTodoInput } from "../pageobjects/newTodoInput"
import { todoFilters } from "../pageobjects/todoFilters"
import { todoList } from "../pageobjects/todoList"

export const when = {
    userCreatesATodo: function (name) {
        newTodoInput.enterTodoName(name)
        newTodoInput.submitTodo()  
    },

    userCreatesAFewTodos: function (names) {
        cy.wrap(names).each( function (name) {
            when.userCreatesATodo(name)
        })
    },

    userCompletesTodo: function (name) {
        todoList.completeTodo(name)
    },

    userGoesToActive: function () {
        todoFilters.gotoActive()
    },

    userGoesToCompleted: function() {
        todoFilters.gotoCompleted()
    }
}