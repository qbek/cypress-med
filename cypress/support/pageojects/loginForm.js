const emailInputEl = '#element-0'
const passInputEl = '#element-3'
const loginFromEl = 'form'

export const loginForm = {

  enterEmail: function (email) {
    cy.get(emailInputEl).type(email)
  },
  enterPassword: function (pass) {
    cy.get(passInputEl).type(pass)
  },
  submitForm: function () {
    cy.get(loginFromEl).submit()
  }
}