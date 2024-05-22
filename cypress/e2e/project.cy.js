import { userSteps } from "../support/steps/userSteps"
import { userPreconditions } from "../support/steps/userPreconditions"

describe("Projects", () => {
  it("User can create a project", () => {
    let projectName = "Moj pierwszy projekt"  
    userPreconditions.isLoggedIn()
    userSteps.createNewProject(projectName)
    userSteps.checkIfProjectCreated(projectName)
  })

  it("Created project is added to all projects list", () => {
    let projectName = "Moj drugi projekt"  
    userPreconditions.isLoggedIn()    
    userSteps.createNewProject(projectName)
    userSteps.checkIfProjectListed(projectName)   
  })
})