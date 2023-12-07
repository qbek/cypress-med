/// <reference types="cypress" />

import { loginSteps } from "../support/steps/loginSteps"

describe('User login tests', function() {

  it.only('User can log in', function () {
    loginSteps.userOpensLoginPage()
    loginSteps.userEntersValidCredentials()
    loginSteps.userChecksIfIsLoggedIn()
  })


})
 

