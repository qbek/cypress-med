import { userSteps } from "../support/steps/userSteps"
import { userPreconditions } from "../support/steps/userPreconditions"

describe('Complete todo feature', () => {
  beforeEach( () => {
    userSteps.opensTodoMVCapp()
  })
  it('User can complete todo and filers are working correctly', () => {
    const todoName = 'Zadanie do zakończenia 1'  
    userPreconditions.hasTodoCreated(todoName)
    userSteps.completesTodo()
    userSteps.checksIfTodoMarkedAsCompleted()
  })

  it('Completed todo is filtered out from Active', () => {
    const todoName = 'Zadanie do zakończenia 2'
    userPreconditions.hasCompletedTodo(todoName)
    userSteps.switchToActiveTodos()
    userSteps.checksIfCompletedTodoIsFilteredOut()
  })

  it('Completed todo is visible on Completed', () => {
    const todoName = 'Zadanie do zakończenia 3'
    userPreconditions.hasCompletedTodo(todoName)
    userSteps.switchToCompletedTodos()
    userSteps.checksIfCompletedTodoIsVisible(todoName)
  })
})
