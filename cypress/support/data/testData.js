import { faker } from "@faker-js/faker"


export const testData = {
  defineTodoName: () => {
    let name = faker.commerce.productName()
    cy.wrap(name).as('todoName')
  },

  defineFewTodos: () => {
    let todos = faker.lorem.sentences({min:2, max:10}, '|').split('|')
    cy.wrap(todos).as('fewTodos')
  }
}