import { newTodoInput } from "../pageobjects/newTodoInput"
import { todosFilters } from "../pageobjects/todosFilters"
import { todosList } from "../pageobjects/todosList"
import { todoMVCApp } from "../pageobjects/todoMVCApp"

export const userSteps = {
  userOpensTodoMVCapp: () => {
    todoMVCApp.openMainPage()
  },

  userCreatesANewTodo: (todoName) => {
    newTodoInput.enterName(todoName)
    newTodoInput.submit()
  },

  userChecksTodoIsCreated: (todoName) => {
    todosList.checkIfTodoExists(todoName)
  },

  userCompletesTodo: () => {
    todosList.completeTodo()
  },

  userChecksIfTodoMarkedAsCompleted: () => {
    todosList.checkIfTodoMarkedAsCompleted()
  },

  userChecksIfCompletedTodoInNOTOnActiveList: (todoName) => {
    todosFilters.gotoActive()
    todosList.checkIfTodoNotExists(todoName)
  },

  userChecksIfCompletedTodoIsOnCompletedList: (todoName) => {
    todosFilters.gotoCompleted()
    todosList.checkIfTodoExists(todoName)
  },

  userCreatesAFewTodos: (fewTodos) => {
    cy.wrap(fewTodos).each( (todo) => {
      newTodoInput.enterName(todo)
      newTodoInput.submit()
    })
  },

  userChecksIfAllTodosAreCreated: (fewTodos) => {
    todosList.checkIfOneOfTodosIsOnTheList(fewTodos)
  }
}