import { userSteps } from "../support/steps/userSteps"

describe('Create todo feature', () => {
  it('User can create a todo', () => {
    const todoName = 'Moje zadanie'
    userSteps.opensTodoMVCapp()
    userSteps.createsANewTodo(todoName)
    userSteps.checksIfTodoIsCreated(todoName)
  })

  it.only('User can create a few todos', () => {
    const todos = [ "default1", "default3", "zadanie 1", "zadanie 2", "zadanie 3"]
    const todosToVerify = ["zadanie 3", "zadanie 1", "zadanie 2"]
    userSteps.opensTodoMVCapp()
    userSteps.createsAFewTodos(todos)
    userSteps.checksIfAllTodosAreCreated(todosToVerify)
  })

})
