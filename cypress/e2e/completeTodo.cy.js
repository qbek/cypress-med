import { userSteps } from "../support/steps/userSteps"

describe('Complete todo feature', () => {
  it('User can complete todo and filers are working correctly', () => {
    const todoName = 'Zadanie do zakończenia'
    userSteps.opensTodoMVCapp()
    userSteps.createsANewTodo(todoName)
    userSteps.completesTodo()
    userSteps.checksIfTodoMarkedAsCompleted()
    userSteps.checksIfCompletedTodoInNOTOnActiveList()
    userSteps.checksIfCompletedTodoIsOnCompletedList(todoName)
  })
})
