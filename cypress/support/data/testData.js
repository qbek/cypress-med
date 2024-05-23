import { faker } from '@faker-js/faker';

export const testData = {
  defineProjectName: function () {
    let name = faker.commerce.productName()

    cy.wrap(name).as('projectName')
  },

  defineTaskName: function () {
    let name = faker.lorem.sentence()
    cy.wrap(name).as('taskName')
  }
}