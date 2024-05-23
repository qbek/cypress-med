import { loginForm } from "../support/pageobjects/loginForm"
import { todoistApp } from "../support/pageobjects/todoistApp"
import { userSteps } from "../support/steps/userSteps"


describe('Integration test for login', () => {

  before( () => {
    todoistApp.navigateToLoginPage()
    loginForm.enterEmail('p@wp.pl')
    loginForm.enterPass('12345678')
  })

  it('Verify 401', () => {
    cy.fixture('login401resp.json').then( (resp) => {
      cy.intercept('https://app.todoist.com/api/v9.1/user/login', resp)
    })   
    loginForm.submitForm()
  })

  it('Verify 500', () => {

    let payload = {
      "error": "WTF",
      "error_code": 19,
      "error_extra": {
          "event_id": "b4491e26a67b42ea9f146c761be22a81",
          "retry_after": 2
      },
      "error_tag": "SERVER_COLLAPSE",
      "http_code": 500
    }

    cy.intercept('https://app.todoist.com/api/v9.1/user/login',
      {
        statusCode: 500,
        body: payload,
      }
    )
    loginForm.submitForm()
  })
})