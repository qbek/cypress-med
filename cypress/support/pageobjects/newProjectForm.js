const projectNameEl = '#edit_project_modal_field_name'
const newProjectFormEl = '.edit_project_modal__form'


export const newProjectForm = {
  enterProjectName: function (name) {
    cy.get(projectNameEl).type(name)
  },

  submit: function () {
    cy.get(newProjectFormEl).submit()
  }
}