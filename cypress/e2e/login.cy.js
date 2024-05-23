/// <reference types="cypress" />
import { loginSteps } from "../support/steps/loginSteps"

describe('User log in', () => {
  it('User can log in', () => {
    loginSteps.opensLoginPage()
    loginSteps.entersCorrectCreds()
    loginSteps.checkIfIsLoggedIn()
  })

})



