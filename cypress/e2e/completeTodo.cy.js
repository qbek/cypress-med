import { userSteps } from "../support/steps/userSteps"
import { userPreconditions } from "../support/steps/userPreconditions"

describe('Complete todo feature', () => {
  beforeEach( () => {
    userSteps.opensTodoMVCapp()
  })
  it('User can complete todo and filers are working correctly', () => {
    userPreconditions.hasTodoCreated()
    userSteps.completesTodo()
    userSteps.checksIfTodoMarkedAsCompleted()
  })

  it('Completed todo is filtered out from Active', () => {
    userPreconditions.hasCompletedTodo()
    userSteps.switchToActiveTodos()
    userSteps.checksIfCompletedTodoIsFilteredOut()
  })

  it('Completed todo is visible on Completed', () => {
    userPreconditions.hasCompletedTodo()
    userSteps.switchToCompletedTodos()
    userSteps.checksIfCompletedTodoIsVisible()
  })
})
