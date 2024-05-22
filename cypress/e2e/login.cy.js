/// <reference types="cypress" />
import { userSteps }  from "../support/steps/userSteps"

describe('User log in', () => {
  it('User can log in', () => {
    userSteps.opensLoginPage()
    userSteps.entersCorrectCreds()
    userSteps.checkIfIsLoggedIn()
  })
})

