const nameInput = '#edit_project_modal_field_name'
const form = '.edit_project_modal__form'



export const newProjectForm = {
  enterName: function (name) {
    cy.get(nameInput).type(`${name}`)
  },

  submitForm: function () {
    cy.get(form).submit()
  }
}