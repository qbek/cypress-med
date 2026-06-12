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
})
