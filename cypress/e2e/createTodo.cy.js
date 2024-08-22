import { userSteps } from "../support/steps/userSteps"


describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = 'Moje zadanie'
    userSteps.opensTodoMVCapp()
    userSteps.createsANewTodo(todoName)
    userSteps.checksIfTodoIsCreated(todoName)
  })
})
