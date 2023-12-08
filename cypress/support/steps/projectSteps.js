import { projectsList } from "../pageobjects/projectsList"
import { newProjectForm } from "../pageobjects/newProjectForm"
import { projectView } from "../pageobjects/projectView"

export const projectSteps = {
  userCreatesANewProject: function(name) {
    projectsList.openNewProjectForm()
    newProjectForm.enterProjectName(name)
    newProjectForm.submit()
  },
  
  userChecksIfProjectIsCreated: function (name) {
    projectView.checkProjectName(name)
  },
  
  userChecksIfProjectIsOnAllProjectsList: function(name) {
    projectsList.assertProjectOnTheList(name)
  }
}