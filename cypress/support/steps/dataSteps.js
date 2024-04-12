export const dataSteps = {
  generateProjectName: function() {
    let projectName = faker.commerce.productName()
    cy.wrap(projectName).as('projectName')
  }
}