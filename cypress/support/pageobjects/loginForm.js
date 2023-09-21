const loginInput = '#element-0'
const passInput = '#element-3'
const form = 'form'


export const loginForm = {
  enterMail: function (mail) {
    cy.get(loginInput).type(mail)
  },
  enterPassword: function (pass) {
    cy.get(passInput).type(pass)
  },
  submitForm: function () {
    cy.get(form).submit()
  }
}