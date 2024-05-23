import { projectSteps } from "../support/steps/projectSteps"
import { userPreconditions } from "../support/steps/userPreconditions"

describe("Projects", () => {
  it("User can create a project", () => {
    userPreconditions.isLoggedIn()
    projectSteps.createNewProject()
    projectSteps.checkIfProjectCreated()
  })

  it.only("Created project is added to all projects list", () => {
    userPreconditions.userHasProjectCreated()
    projectSteps.checkIfProjectListed()   
  })
})

