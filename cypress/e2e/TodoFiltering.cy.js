/// <reference types='cypress' />
import { given } from "../support/steps/given"
import { when } from "../support/steps/when"
import { then } from "../support/steps/then"

describe('Todo filtering feature test', () => {
    it('User can filter out completed todos from Active filter', () => {
        const todoName = 'Completed todo for filtering'
        given.userHasTodoMVCOpened()
        given.userHasCompletedTodo(todoName)
        when.userGoesToActive()
        then.heChecksTodoIsNotDisplayed(todoName)
    })

    it('User can filter Completed todos', () => {
        const todoName = 'Completed todo for another filterin'
        given.userHasTodoMVCOpened()
        given.userHasCompletedTodo(todoName)
        when.userGoesToCompleted()
        then.heChecksTodoIsDisplayed(todoName)
    })
})