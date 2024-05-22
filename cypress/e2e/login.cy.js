/// <reference types="cypress" />
const loginUrl = 'https://app.todoist.com/auth/login'
const emailInput = '#element-0'
const passInput =  '#element-3'
const loginForm = 'form'
const glass = '#loading'

const sessionCookie = 'todoistd'

const userEmail = 'gbinxeqerpnywwysux@awdrt.org'
const userPass = 'ti4FCvBL39i7mMq'

describe('User log in', () => {
  it.only('User can log in', () => {
    userOpensLoginPage()
    userEntersCorrectCreds()
    userWaitsUntilGlassClose()
    userCheckIfIsLoggedIn()   
  })
})

function userOpensLoginPage() {
  cy.visit(loginUrl)
}

function userEntersCorrectCreds() {
  cy.get(emailInput).type(userEmail)
  cy.get(passInput).type(userPass)
  cy.get(loginForm).submit()
}

function userWaitsUntilGlassClose() {
  cy.get(glass).should('be.visible')
  cy.get(glass).should('not.be.visible')
}

function userCheckIfIsLoggedIn() {
  cy.getCookie(sessionCookie).should('exist')
}