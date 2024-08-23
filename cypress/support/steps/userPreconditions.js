import { userSteps } from "./userSteps"

export const userPreconditions = {
  hasTodoCreated: function (todoName) {
    userSteps.createsANewTodo(todoName)
  },

  hasCompletedTodo: function (todoName) {
    userSteps.createsANewTodo(todoName)
    userSteps.completesTodo()
  }
}