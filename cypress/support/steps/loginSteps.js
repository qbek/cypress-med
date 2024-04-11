/// <reference types="cypress" />
import { loginForm } from "../pageobjects/loginForm"
import { todoistApp } from "../pageobjects/todoistApp"

const userEmail = 'gbinxeqerpnywwysux@awdrt.org'
const userPass = 'ti4FCvBL39i7mMq'

export const loginSteps = {
  openSingInPage: function () {
    todoistApp.openLoginPage()
   
  },
  enterCorrectCredentials: function () {
    loginForm.enterEmail(userEmail)
    loginForm.enterPass(userPass)
    loginForm.submitButton()
    todoistApp.waitForGlassToClose()
  },
  
  checkIfLoggedIn: function () {
    todoistApp.checkUserCookie()
  }
}



