import { todoList } from "../pageobjects/todoList"

export const then = {
    heChecksTodoIsDisplayed: function (name) {
        todoList.checkAllTodosExistsOnList([name])
    },

    userChecksAllTodoAreDisplayed: function(names) {
        todoList.checkAllTodosExistsOnList(names)
    },

    heChecksTodoIsNotDisplayed: function (name) {
        todoList.checkTodoNOTExistsOnList(name)
    },

    heChecksTodoMarkedAsCompleted: function (name) {
        todoList.checkTodoHasCompletedClass(name)
    }
}