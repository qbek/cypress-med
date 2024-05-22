const emailInput = '#element-0'
const passInput =  '#element-3'
const form = 'form'

export const loginForm = {
  enterEmail: function (email) {
    cy.get(emailInput).type(email)
  },

  enterPass: function (pass) {
    cy.get(passInput).type(pass)
  },

  submitForm: function () {
    cy.get(form).submit()
  }

}