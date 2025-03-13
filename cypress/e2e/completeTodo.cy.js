/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
describe("Complete todo feature", () => {
  it('User can complete a todo', () => {
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo()
    userSteps.userCompletesTodo()
    userSteps.userChecksIfTodoMarkedAsCompleted()
  })
  
  it('User can filter out Active todos', () => {
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo()
    userSteps.userCompletesTodo()
    userSteps.userChecksIfCompletedTodoInNOTOnActiveList()
  })

  it('User can filter Completed todos', () => {
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo()
    userSteps.userCompletesTodo()
    userSteps.userChecksIfCompletedTodoIsOnCompletedList()
  })
})

