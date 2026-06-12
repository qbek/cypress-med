/// <reference types='cypress' />
import { given } from "../support/steps/given"
import { when } from "../support/steps/when"
import { then } from "../support/steps/then"

describe('Todo completion feature test', () => {
    it('User can complete a todo', () => {
        const todoName = 'Completed todo'
        given.userHasTodoMVCOpened()
        given.userHasTodoCreated(todoName)
        when.userCompletesTodo()
        then.heChecksTodoMarkedAsCompleted()
    })
})
