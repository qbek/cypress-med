/// <reference types='cypress' />
import { given } from "../support/steps/given"
import { when } from "../support/steps/when"
import { then } from "../support/steps/then"

describe('Todo creation feature tests', () => {
    it('User can create a todo', () => {
        const todoName = 'My second todo ddd'
        given.userHasTodoMVCOpened()
        when.userCreatesATodo(todoName)
        then.heChecksTodoIsDisplayed(todoName)
    })

    it.only('User can create a few todos', () => {
        const todosNames = ['todo 11', 'todo 22', 'todo 33']
        const expected = ['todo 111', 'todo 222', 'todo 333']
        given.userHasTodoMVCOpened()
        when.userCreatesAFewTodos(todosNames)
        then.userChecksAllTodoAreDisplayed(expected)    
    })

})


