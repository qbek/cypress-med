export const todoMvcApp = {
  open: function () {
    cy.visit(Cypress.env('todoist_url'))
  }
}