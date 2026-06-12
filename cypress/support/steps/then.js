import { todoList } from "../pageobjects/todoList"

export const then = {
    heChecksTodoIsDisplayed: function (name) {
        todoList.checkTodoExistsOnList(name)
    },

    heChecksTodoIsNotDisplayed: function (name) {
        todoList.checkTodoNOTExistsOnList(name)
    },

    heChecksTodoMarkedAsCompleted: function () {
        todoList.checkTodoHasCompletedClass()
    }
}