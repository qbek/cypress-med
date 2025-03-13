export const testData = {
  defineTodoName: () => {
    cy.wrap("Moje zadanie").as('todoName')
  },

  defineFewTodos: () => {
    cy.wrap(['Z1', 'Z2', 'Z3']).as('fewTodos')

  }
}