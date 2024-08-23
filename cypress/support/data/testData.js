import { faker } from '@faker-js/faker'

export const testData = {
  setTodoName: function(name) {
    cy.wrap(name).as('todoName')
  },

  setTodoNames: function(name) {
    cy.wrap(name).as('todoNames')
  },

  prepareTodoName: function() {
    if(Cypress.env('useRandom')) {
      this.setTodoName(randomTodoName())
    } else {
      this.setTodoName(staticTodoName())
    }
  },

  prepareTodoNames: function() {
    if(Cypress.env('useRandom')) {
      this.setTodoNames(randomTodoNames())
    } else {
      this.setTodoNames(staticTodoNames())
    }
  }
}


function staticTodoName() {
  return 'To jest zadanie z warstwy testData'
}

function staticTodoNames() {
  return ['zadanie 1', 'zadanie 2', 'zadanie 3']
}

function randomTodoName() {
  return faker.commerce.productName()
}

function randomTodoNames() {
  return faker.lorem.sentences(3, '|').split('|')
}