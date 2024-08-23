import { todoList } from "../pageobjects/todoList"
import { todoInput } from "../pageobjects/todoInput"
import { filters } from "../pageobjects/filters"
import { todoMvcApp } from "../pageobjects/todoMvcApp"
import { testData } from "../data/testData"


export const userSteps = {
  opensTodoMVCapp: function() {
    todoMvcApp.open()
  },
  
  createsANewTodo: function() {
    testData.prepareTodoName()
    cy.get('@todoName').then( (name) => {
      createTodo(name)
    })
  },
  
  createsAFewTodos: function() {
    testData.prepareTodoNames()
    cy.get('@todoNames').each( (todoName) => {
      createTodo(todoName)
    } )
  },
  
  checksIfTodoIsCreated: function() {
    let aliasName = 'todosFromPage'
    todoList.getAllTodoNamesAndSaveInAlias(aliasName)
    cy.get('@todoName').then( (name) => {
      cy.get(`@${aliasName}`).should('deep.equal', [name])
    })
  },

  checksIfAllTodosAreCreated: function () {
    let aliasName = 'todosFromPage'
    todoList.getAllTodoNamesAndSaveInAlias(aliasName)
    cy.get('@todoNames').then( (todoNames) => {
      cy.get(`@${aliasName}`).should('include.members', todoNames)
    })
  },
  
  completesTodo: function() {
    todoList.completeTodo()
  },
  
  checksIfTodoMarkedAsCompleted: function() {
    todoList.checkTodoHasCompletedClass()
  },

  switchToActiveTodos: function() {
    filters.gotoActive()
  },

  switchToCompletedTodos: function () {
    filters.gotoToCompleted()
  },
  
  checksIfCompletedTodoIsFilteredOut: function() { 
    todoList.checkListIsEmpty()
  },
  
  checksIfCompletedTodoIsVisible: function() {
    let aliasName = 'todosFromPage'
    todoList.getAllTodoNamesAndSaveInAlias(aliasName)
    cy.get('@todoName').then( (name) => {
      cy.get(`@${aliasName}`).should('deep.equal', [name])
    })
  }
}

function createTodo(name) {
  todoInput.enterTodoNameAndSubmit(name)
}

