/// <reference types='cypress' />
import { given } from "../support/steps/given"
import { when } from "../support/steps/when"
import { then } from "../support/steps/then"
import { testDataProvider } from "../support/data/testDataProvider"

describe('Todo completion feature test', () => {


    it('User can complete a todo', () => {
        const todoName = testDataProvider.getTodoName()
        given.userHasTodoMVCOpened()
        given.userHasTodoCreated(todoName)
        when.userCompletesTodo(todoName)
        then.heChecksTodoMarkedAsCompleted(todoName)
    })

    it('User completes THE ONE', () => {
        const toFinish = 'finish_me'
        const todosNames = ['todo1', 'todo2', toFinish, 'todo3']
        given.userHasTodoMVCWithFewTods(todosNames)
        when.userCompletesTodo(toFinish)
        then.heChecksTodoMarkedAsCompleted(toFinish)
    })
})