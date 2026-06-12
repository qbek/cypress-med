import { app } from "../pageobjects/todoApp"
import { when } from "./when"

export const given = {
    userHasTodoMVCOpened: function() {
        app.openMainView()
    },

    userHasTodoCreated: function(name) {
        when.userCreatesATodo(name)
    },

    userHasCompletedTodo: function (name) {
        when.userCreatesATodo(name)
        when.userCompletesTodo(name)
    },

    userHasTodoMVCWithFewTods: function (names) {
        given.userHasTodoMVCOpened()
        when.userCreatesAFewTodos(names)
    }
}