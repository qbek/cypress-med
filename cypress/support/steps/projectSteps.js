import { testData } from "../data/testData"
import { myProjects } from "../pageobjects/myProjects"
import { newProjectType } from "../pageobjects/newProjectType"
import { projectEditForm } from "../pageobjects/projectEditForm"
import { projectView } from "../pageobjects/projectView"


export const projectSteps = {
  createNewProject: function () {
    testData.defineProjectName()
    myProjects.clickPlusButton()
    newProjectType.addProject()
    cy.get('@projectName').then( (name) => {
      projectEditForm.enterName(name)
    })
    projectEditForm.submit()
  },

  checkIfProjectCreated: function () {
    cy.get('@projectName').then( (name) => {
      projectView.checkProjectName(name)
    })

  },

  checkIfProjectListed: function() {
    cy.get('@projectName').then( (name) => {
      myProjects.checkIfProjectListed(name)
    })
  }
}