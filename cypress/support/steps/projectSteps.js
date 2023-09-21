import { projectList } from "../pageobjects/projectsList"
import { newProjectForm } from "../pageobjects/newProjectForm"


export const projectSteps = {
  createNewProject: function (name) {
    projectList.addNewProjectClick()
    newProjectForm.enterName(name)
    newProjectForm.submitForm()
  },

  assertProject: function (name) {
    
    //problem: zbyt luźna asercja, potencjalny false positive ('project 1', 'project 11')
    projectList.assertProjectExists(name)
    
  },

  selectProjectView: function () {
    if (projectExist)
      projectList.openRandomProject()
    else {
      this.createNewProject
    }
  
  }

}