import { loginForm } from "../pageobjects/loginForm"
import { myProjects } from "../pageobjects/myProjects"
import { newProjectType } from "../pageobjects/newProjectType"
import { projectEditForm } from "../pageobjects/projectEditForm"
import { projectView } from "../pageobjects/projectView"
import { todoistApp } from "../pageobjects/todoistApp"

const userEmail = 'gbinxeqerpnywwysux@awdrt.org'
const userPass = 'ti4FCvBL39i7mMq'


export const userSteps = {
  opensLoginPage: function() {
    todoistApp.navigateToLoginPage()
  },

  entersCorrectCreds: function () {
    loginForm.enterEmail(userEmail)
    loginForm.enterPass(userPass)
    loginForm.submitForm()
    waitsUntilGlassClose()
  },

  checkIfIsLoggedIn: function () {
    todoistApp.checkIfSessionCookieExists()
  },

  createNewProject: function (name) {
    myProjects.clickPlusButton()
    newProjectType.addProject()  
    projectEditForm.enterName(name)
    projectEditForm.submit()
  },

  checkIfProjectCreated: function (name) {
    projectView.checkProjectName(name)
  },

  checkIfProjectListed: function(name) {
    myProjects.checkIfProjectListed(name)
  }
}


