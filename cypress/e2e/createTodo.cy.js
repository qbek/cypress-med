/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = "Moje zadanie"
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo(todoName)
    userSteps.userChecksTodoIsCreated(todoName)
  })

})
