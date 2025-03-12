/// <reference types='cypress' />
import { userSteps } from "../support/steps/userSteps"
describe("Complete todo feature", () => {
  it.only('User can complete a todo', () => {
    const todoName = "Zakonczone zadanie"
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo(todoName)
    userSteps.userCompletesTodo()
    userSteps.userChecksIfTodoMarkedAsCompleted()
    userSteps.userChecksIfCompletedTodoInNOTOnActiveList(todoName)
    userSteps.userChecksIfCompletedTodoIsOnCompletedList(todoName)
  })  
} )
