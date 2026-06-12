/// <reference types='cypress' />
import { given } from "../support/steps/given"
import { when } from "../support/steps/when"
import { then } from "../support/steps/then"
import { testDataProvider } from "../support/data/testDataProvider"


describe('Todo creation feature tests', () => {
    it('User can create a todo', () => {
        const todoName = testDataProvider.getTodoName()
        given.userHasTodoMVCOpened()
        when.userCreatesATodo(todoName)
        then.heChecksTodoIsDisplayed(todoName)
    })

    it('User can create a few todos', () => {
        const todosNames = testDataProvider.getFewTodosNames()
        given.userHasTodoMVCOpened()
        when.userCreatesAFewTodos(todosNames)
        then.userChecksAllTodoAreDisplayed(todosNames)    
    })

})


