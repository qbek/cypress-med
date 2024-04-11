/// <reference types="cypress" />

import { func } from "assert-plus"

const todoistLoginPage = 'https://app.todoist.com/auth/login'
const glass = '#loading'
const loginInput = '#element-0'
const passInput = '#element-3'
const submitButton = '[data-gtm-id="start-email-login"]'

const userEmail = 'gbinxeqerpnywwysux@awdrt.org'
const userPass = 'ti4FCvBL39i7mMq'

export const userSteps = {
  openSingInPage: function () {
    cy.visit(todoistLoginPage)
  },
  enterCorrectCredentials: function () {
    cy.get(loginInput, { timeout: 10000}).type(userEmail)
    cy.get(passInput).type(userPass)
    cy.get(submitButton).click()
    cy.get(glass).should('be.visible')
    cy.get(glass, { timeout: 10000}).should('not.be.visible')
  },
  checkIfLoggedIn: function () {
    cy.getCookie('todoistd').should('exist')
  },

  createNewProject: function (name) {
    cy.get('[aria-label="My projects menu"]').click()
    cy.get('[aria-label="Add project"]').click()

    cy.get('#edit_project_modal_field_name').type(name)
    cy.get('.edit_project_modal__form').submit()
  },

  checkIfProjectCreated: function (name) {
    cy.get('[data-testid="large-header"]').should('have.text', name + "gggggg")
  },

  checkIfProjectListed: function(name) {
    cy.get('#projects_list').should('contain.text', name)
  }

  
}



