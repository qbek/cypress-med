import { projectsList } from "../pageobjects/projectsList"
import { newProjectTypeForm } from "../pageobjects/newProjectTypeForm"
import { projectView } from "../pageobjects/projectView"
import { projectEditForm } from "../pageobjects/projectEditForm"


export const projectSteps = {
  createNewProject: function (name) {
    projectsList.startProjectCreation()
    newProjectTypeForm.selectNewProject()
    projectEditForm.enterProjectName(name)
    projectEditForm.submit()
  },

  checkIfProjectCreated: function (name) {
    projectView.checkProjectName(name)
  },

  checkIfProjectListed: function(name) {
    projectsList.checkIfExists(name)
  }
}