/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = "Moje zadanie"
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo(todoName)
    userSteps.userChecksTodoIsCreated(todoName)
  })

  it('User can create a few todos', () => {
    const fewTodos = ['b1', 'b3','Zadanie 2', 'Zadanie 3', 'b3']
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesAFewTodos(fewTodos)
    userSteps.userChecksIfAllTodosAreCreated(fewTodos)
  })
})


