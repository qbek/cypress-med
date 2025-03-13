/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
import { preconditionSteps } from "../support/steps/preconditionSteps"
describe("Complete todo feature", () => {
  it('User can complete a todo', () => {
    preconditionSteps.userHasTodoCreated()
    userSteps.userCompletesTodo()
    userSteps.userChecksIfTodoMarkedAsCompleted()
  })
  
  it('User can filter out Active todos', () => {
    preconditionSteps.userHasCompletedTodo()
    userSteps.userGoesToActiveTab()
    userSteps.userChecksIfCompletedTodoInNOTOnActiveList()
  })

  it('User can filter Completed todos', () => {
    preconditionSteps.userHasCompletedTodo()
    userSteps.userGoesToCompletedTab()
    userSteps.userChecksIfCompletedTodoIsOnCompletedList()
  })
})
