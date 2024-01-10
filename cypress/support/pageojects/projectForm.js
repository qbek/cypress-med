const nameInputEl = '#edit_project_modal_field_name'
const formEl = '.edit_project_modal__form'

export const projectForm = {
  enterName: function (name) {
    cy.get(nameInputEl).type(name)
  },

  submitForm: function () {
    cy.get(formEl).submit()
  }
}