/// <reference types="cypress" />
import { loginSteps } from "../support/steps/loginSteps"
describe('User login tests', () => {
  it('User can log in', () => {
    loginSteps.openSingInPage()
    loginSteps.enterCorrectCredentials()
    loginSteps.checkIfLoggedIn()
  })
})

