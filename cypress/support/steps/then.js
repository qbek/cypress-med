import { todoList } from "../pageobjects/todoList"

export const then = {
    heChecksTodoIsDisplayed: function (name) {
        todoList.checkTodoExistsOnList(name)
    },

    userChecksAllTodoAreDisplayed: function(names) {
        todoList.checkAllTodosExistsOnList(names)
    },

    heChecksTodoIsNotDisplayed: function (name) {
        todoList.checkTodoNOTExistsOnList(name)
    },

    heChecksTodoMarkedAsCompleted: function () {
        todoList.checkTodoHasCompletedClass()
    }
}