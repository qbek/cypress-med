import { func } from "assert-plus";

export const testData = {
  prepareTodoName: function() {
    cy.wrap('To jest zadanie z warstwy testData').as('todoName')
  },

  prepareTodoNames: function() {
    cy.wrap(['zadanie 1', 'zadanie 2', 'zadanie 3']).as('todoNames')
  }
}