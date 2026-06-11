/// <reference types='cypress' />
import { newTodoInput } from '../support/pageobjects/newTodoInput'
import { todoFilters } from '../support/pageobjects/todoFilters'
import { todoList } from '../support/pageobjects/todoList'
import { app } from '../support/pageobjects/todoApp'

describe('Todo creation feature tests', () => {
    


    it('User can create a todo', () => {
        const todoName = 'My second todo'
        app.openMainView()
        newTodoInput.enterTodoName(todoName)
        newTodoInput.submitTodo()
        todoList.checkTodoExistsOnList(todoName)
    })

    it('User can complete a todo', () => {
        const todoName = 'Completed todo'
        app.openMainView()
        newTodoInput.enterTodoName(todoName)
        newTodoInput.submitTodo()
        todoList.completeTodo()
        todoList.checkTodoHasCompletedClass()
    })

    it('User can filter out completed todos from Active filter', () => {
        const todoName = 'Completed todo for filtering'
        app.openMainView()
        newTodoInput.enterTodoName(todoName)
        newTodoInput.submitTodo()
        todoList.completeTodo()
        todoFilters.gotoActive()
        todoList.checkTodoNOTExistsOnList(todoName)
    })

    it('User can filter Completed todos', () => {
        const todoName = 'Completed todo for another filterin'
        app.openMainView()
        newTodoInput.enterTodoName(todoName)
        newTodoInput.submitTodo()
        todoList.completeTodo()
        todoFilters.gotoCompleted()
        todoList.checkTodoExistsOnList(todoName)
    })
})