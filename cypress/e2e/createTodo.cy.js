import { userSteps } from "../support/steps/userSteps"

describe('Create todo feature', () => {
  it('User can create a todo', () => {
    userSteps.opensTodoMVCapp()
    userSteps.createsANewTodo()
    userSteps.checksIfTodoIsCreated()
  })

  it('User can create a few todos', () => {
    userSteps.opensTodoMVCapp()
    userSteps.createsAFewTodos()
    userSteps.checksIfAllTodosAreCreated()
  })
})
