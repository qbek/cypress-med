import { projectList } from "../pageobjects/projectsList"
import { newProjectForm } from "../pageobjects/newProjectForm"
import { projectView } from "../pageobjects/projectView"


export const projectSteps = {

  createNewProject: function () {
    //getter danej testowej
    cy.get('@projectName').then(name => {
      projectList.addNewProjectClick()
      newProjectForm.enterName(name)
      newProjectForm.submitForm()
    })
  },

  assertProject: function () {
    cy.get('@projectName').then(name => {
      projectView.assertProjectName(name)
    })
  },

  assertProjectIsOnThelist: function () {
    cy.get('@projectInfo').then( project => {
        projectList.assertProjectExists(project.id, project.name)
    })
  }
}