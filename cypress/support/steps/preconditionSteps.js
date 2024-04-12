import { loginSteps } from "./loginSteps"
import { projectSteps } from "./projectSteps"
import { todoistApp } from "../pageobjects/todoistApp"

export const preconditionSteps = {
  userIsLoggedIn: function() {
      loginSteps.openSingInPage()
      loginSteps.enterCorrectCredentials()
      loginSteps.checkIfLoggedIn()
  },

  userHasProjectCreated: function () {
    this.userIsLoggedIn()
    cy.get('@projectName').then( (name) => {
      let payload = { name: name}
      cy.request('POST', 'https://api.todoist.com/rest/v2/projects',  payload).then( (resp) => {  
        let projectId= resp.body.id;
        cy.wrap(projectId).as('projectId')
        cy.visit(`https://app.todoist.com/app/project/${name}-${projectId}`)
        todoistApp.waitForGlassToClose()
      })
    })
    // projectSteps.createNewProject()
   

  }
}