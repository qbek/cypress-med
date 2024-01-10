/// <reference types="cypress" />

import { loginSteps } from "../support/steps/loginSteps"
import { email } from "../support/steps/loginSteps"


describe('User login', function () {
  it('User can successfully log in', function () {
    loginSteps.userOpensLoginPage()
    loginSteps.userEntersValidCredentials()
    loginSteps.userChecksIfLoggedIn()

    
  })
})


