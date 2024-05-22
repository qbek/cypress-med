const newProjectNameInput = '#edit_project_modal_field_name'
const newProjectForm = '.edit_project_modal__form'


export const projectEditForm = {

  enterName: function (name) {
    cy.get(newProjectNameInput).type(name)
  },

  submit: function () {
    cy.get(newProjectForm).submit()
  }

}