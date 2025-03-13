import { userSteps } from "./userSteps"

export const preconditionSteps = {

  userHasTodoCreated: () => {
    userSteps.userOpensTodoMVCapp()
    userSteps.userCreatesANewTodo()
  },

  userHasCompletedTodo: () => {
    preconditionSteps.userHasTodoCreated()
    userSteps.userCompletesTodo()
  }

}


