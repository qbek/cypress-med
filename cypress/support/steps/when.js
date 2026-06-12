import { newTodoInput } from "../pageobjects/newTodoInput"
import { todoFilters } from "../pageobjects/todoFilters"
import { todoList } from "../pageobjects/todoList"

export const when = {
    userCreatesATodo: function (name) {
        newTodoInput.enterTodoName(name)
        newTodoInput.submitTodo()  
    },

    userCompletesTodo: function () {
        todoList.completeTodo()
    },

    userGoesToActive: function () {
        todoFilters.gotoActive()
    },

    userGoesToCompleted: function() {
        todoFilters.gotoCompleted()
    }
}