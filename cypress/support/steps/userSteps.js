import { loginForm } from "../pageobjects/loginForm"
import { myProjects } from "../pageobjects/myProjects"

const loginUrl = 'https://app.todoist.com/auth/login'
const glass = '#loading'


const addProjectButton = '[aria-label="Add project"]'

const newProjectNameInput = '#edit_project_modal_field_name'
const newProjectForm = '.edit_project_modal__form'

const projectHeader = '[data-testid="large-header"]'
const projectsList = '#projects_list'

const sessionCookie = 'todoistd'

const userEmail = 'gbinxeqerpnywwysux@awdrt.org'
const userPass = 'ti4FCvBL39i7mMq'


export const userSteps = {
  opensLoginPage: function() {
    cy.visit(loginUrl)
  },

  entersCorrectCreds: function () {
    loginForm.enterEmail(userEmail)
    loginForm.enterPass(userPass)
    loginForm.submitForm()
    waitsUntilGlassClose()
  },

  checkIfIsLoggedIn: function () {
    cy.getCookie(sessionCookie).should('exist')
  },

  createNewProject: function (name) {
    myProjects.clickPlusButton()
    cy.get(myProjectsMenuButton).click()
    cy.get(addProjectButton).click()

    cy.get(newProjectNameInput).type(name)
    cy.get(newProjectForm).submit()
  },

  checkIfProjectCreated: function (name) {
    cy.get(projectHeader).should('have.text', name)
  },

  checkIfProjectListed: function(name) {
    myProjects.checkIfProjectListed(name)
  }
}

function waitsUntilGlassClose() {
  cy.get(glass).should('be.visible')
  cy.get(glass).should('not.be.visible')
}
