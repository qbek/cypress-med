/// <reference types="cypress" />

import { loginSteps } from "../support/steps/loginSteps"

describe('Login functionality', () => {
  it('User can log in to todist', () => {
    loginSteps.openLoginPage()
    loginSteps.enterValidCredentials()
    loginSteps.checkIfLoggedIn()
  })
})