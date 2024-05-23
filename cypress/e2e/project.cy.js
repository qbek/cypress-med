import { projectSteps } from "../support/steps/projectSteps"
import { userPreconditions } from "../support/steps/userPreconditions"

describe("Projects", () => {
  it.only("User can create a project", () => {
    userPreconditions.isLoggedIn()
    projectSteps.createNewProject()
    projectSteps.checkIfProjectCreated()
  })

  it("Created project is added to all projects list", () => {
    userPreconditions.isLoggedIn()    
    projectSteps.createNewProject()
    projectSteps.checkIfProjectListed()   
  })
})

