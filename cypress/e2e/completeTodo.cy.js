/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
describe("Complete todo feature", () => {
  it('User can complete a todo', () => {
    const todoName = "Zakonczone zadanie"
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo(todoName)
    userSteps.userCompletesTodo()
    userSteps.userChecksIfTodoMarkedAsCompleted()
  })
  
  it('User can filter out Active todos', () => {
    const todoName = "Zakonczone zadanie"
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo(todoName)
    userSteps.userCompletesTodo()
    userSteps.userChecksIfCompletedTodoInNOTOnActiveList(todoName)
  })

  it('User can filter Completed todos', () => {
    const todoName = "Zakonczone zadanie"
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo(todoName)
    userSteps.userCompletesTodo()
    userSteps.userChecksIfCompletedTodoIsOnCompletedList(todoName)
  })

})

