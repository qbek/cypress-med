const inputEmailEl = '#element-0'
const inputPassEl = '#element-3'
const loginFormEl = 'form'

export const loginForm = {
  
  enterMail: function (email) {
    cy.get(inputEmailEl).type(email)
  },
  enterPassword: function (pass) {
  
    cy.get(inputPassEl).type(pass)
  },

  submit: function () {
    cy.get(loginFormEl).submit()
  }
}