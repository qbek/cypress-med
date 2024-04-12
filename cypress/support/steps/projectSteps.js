import { projectsList } from "../pageobjects/projectsList"
import { newProjectTypeForm } from "../pageobjects/newProjectTypeForm"
import { projectView } from "../pageobjects/projectView"
import { projectEditForm } from "../pageobjects/projectEditForm"


export const projectSteps = {
  createNewProject: function () {
    cy.get('@projectName').then( (name) => {
      projectsList.startProjectCreation()
      newProjectTypeForm.selectNewProject()
      projectEditForm.enterProjectName(name)
      projectEditForm.submit()
    })
  },

  checkIfProjectCreated: function () {
    cy.get('@projectName').then( (name) => {
      projectView.checkProjectName(name)
    })   
  },

  checkIfProjectListed: function() {
    cy.get('@projectName').then( (name) => {
      projectsList.checkIfExists(name)
    })
  }
}