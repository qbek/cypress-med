import { app } from "../pageobjects/todoApp"
import { when } from "./when"
import { todoList } from "../pageobjects/todoList"

export const given = {
    userHasTodoMVCOpened: function() {
        app.openMainView()
    },

    userHasTodoCreated: function(name) {
        when.userCreatesATodo(name)
    },

    userHasCompletedTodo: function (name) {
        when.userCreatesATodo(name)
        todoList.completeTodo()
    }
}