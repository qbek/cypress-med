const nameInput = '#edit_project_modal_field_name'
const form = '.edit_project_modal__form'


export const projectEditForm = {
  enterProjectName: function (name) {
    cy.get(nameInput).type(name)
  },

  submit: function () {
    cy.get(form).submit()
  }
}
