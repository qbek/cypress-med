import { projectForm } from "../pageojects/projectForm"
import { projectList } from "../pageojects/projectList"
import { projectDetailsView } from "../pageojects/projectDetailsView"

export const projectSteps = {
  userCreatesANewProject: function () {
    cy.get('@projectName').then(function (projectName) {
      projectList.openNewProjectCreationForm()
      projectForm.enterName(projectName)
      projectForm.submitForm()
    })
  },
  
  userChecksIfProjectIsCreated: function () {
    cy.get('@projectName').then(function (projectName) {
      projectDetailsView.checkProjectName(projectName)
    })
  },
  
  userChecksIfProjectIsOnAllProjectsList: function () {
    cy.get('@projectName').then(function (projectName) {
      projectList.checkProjectExists(projectName)     
    })
  }
}