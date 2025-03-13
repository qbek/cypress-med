/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
describe('Create todo feature', () => {
  it('User can create a todo', () => {
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo()
    userSteps.userChecksTodoIsCreated()
  })

  it('User can create a few todos', () => {
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesAFewTodos()
    userSteps.userChecksIfAllTodosAreCreated()
  })
})


