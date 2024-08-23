import { todoList } from "../pageobjects/todoList"
import { todoInput } from "../pageobjects/todoInput"
import { filters } from "../pageobjects/filters"
import { todoMvcApp } from "../pageobjects/todoMvcApp"

export const userSteps = {
  opensTodoMVCapp: function() {
    todoMvcApp.open()
  },
  
  createsANewTodo: function(todoName) {
    todoInput.enterTodoNameAndSubmit(todoName)
  },

  createsAFewTodos: function(todoNames) {
    cy.wrap(todoNames).each( (todoName) => {
      this.createsANewTodo(todoName)
    } )
  },
  
  checksIfTodoIsCreated: function(todoName) {
    todoList.checkTodoIsVisible(todoName)
  },

  checksIfAllTodosAreCreated: function (todoNames) {
    // cy.wrap(todoNames).each( (todoName) => {
    //   todoList.checkOneOfTodoIsVisible(todoName)
    // })
    todoList.checkAllTodosAreVisible(todoNames)
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
  
  checksIfCompletedTodoIsVisible: function(todoName) {
    todoList.checkTodoIsVisible(todoName)
  }
}


