import { newTodoInput } from "../pageobjects/newTodoInput"
import { todosFilters } from "../pageobjects/todosFilters"
import { todosList } from "../pageobjects/todosList"
import { todoMVCApp } from "../pageobjects/todoMVCApp"
import { testData } from "../data/testData"


export const userSteps = {

  userOpensTodoMVCapp: () => {
    todoMVCApp.openMainPage()
  },

  userCreatesANewTodo: () => {
    testData.defineTodoName()
    cy.get('@todoName').then( (todoName) => {
      newTodoInput.enterName(todoName)
      newTodoInput.submit()
    } )
  },

  userChecksTodoIsCreated: () => {
    cy.get('@todoName').then( (todoName) => {
      todosList.checkIfAllTodosExists([todoName])
    })
  },

  userCompletesTodo: () => {
    todosList.completeTodo()
  },

  userChecksIfTodoMarkedAsCompleted: () => {
    todosList.checkIfTodoMarkedAsCompleted()
  },

  userChecksIfCompletedTodoInNOTOnActiveList: () => {
    cy.get('@todoName').then( (todoName) => {
      todosList.checkIfTodoNotExists(todoName)
    })
  },

  userChecksIfCompletedTodoIsOnCompletedList: () => {
    cy.get('@todoName').then( (todoName) => {
      todosList.checkIfAllTodosExists([todoName])
    })
  },

  userCreatesAFewTodos: () => {
    testData.defineFewTodos()
    cy.get('@fewTodos').then( (fewTodos) => {
      cy.wrap(fewTodos).each( (todo) => {
        newTodoInput.enterName(todo)
        newTodoInput.submit()
      })
    })
  },

  userChecksIfAllTodosAreCreated: () => {
    cy.get('@fewTodos').then( (fewTodos) => {
      todosList.checkIfAllTodosExists(fewTodos)
    } )
  },

  userGoesToActiveTab: () => {
    todosFilters.gotoActive()
  },

  userGoesToCompletedTab: () => {
    todosFilters.gotoCompleted()
  }
}