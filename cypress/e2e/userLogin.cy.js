/// <reference types="cypress" />
import { userSteps } from "../support/steps/userSteps"
describe('User login tests', () => {
  it('User can log in', () => {
    userSteps.openSingInPage()
    userSteps.enterCorrectCredentials()
    userSteps.checkIfLoggedIn()
  })
})

