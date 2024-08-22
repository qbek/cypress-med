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
  
  checksIfTodoIsCreated: function(todoName) {
    todoList.checkTodoIsVisible(todoName)
  },
  
  completesTodo: function() {
    todoList.completeTodo()
  },
  
  checksIfTodoMarkedAsCompleted: function() {
    todoList.checkTodoHasCompletedClass()
  },
  
  checksIfCompletedTodoInNOTOnActiveList: function() {
    filters.gotoActive()
    todoList.checkListIsEmpty()
  },
  
  checksIfCompletedTodoIsOnCompletedList: function(todoName) {
    filters.gotoToCompleted()
    todoList.checkTodoIsVisible(todoName)
  }
}


