
const loginInput = '#element-0'
const passInput = '#element-3'
const submitButton = '[data-gtm-id="start-email-login"]'

export const loginForm = {

  enterEmail: function(userEmail) {
    cy.get(loginInput, { timeout: 10000}).type(userEmail)
  },
  enterPass: function(userPass) {
    cy.get(passInput).type(userPass)
  },
  submitButton: function() {
    cy.get(submitButton).click()

  }

}