import { projectForm } from "../pageojects/projectForm"
import { projectList } from "../pageojects/projectList"
import { projectDetailsView } from "../pageojects/projectDetailsView"

export const projectSteps = {
  userCreatesANewProject: function (name) {
    projectList.openNewProjectCreationForm()
    projectForm.enterName(name)
    projectForm.submitForm()
  },
  
  userChecksIfProjectIsCreated: function (name) {
    projectDetailsView.checkProjectName(name)
  },
  
  userChecksIfProjectIsOnAllProjectsList: function (name) {
    projectList.checkProjectExists(name)
  }
}