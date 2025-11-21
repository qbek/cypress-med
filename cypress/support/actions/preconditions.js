import { newTodoInput } from "../pageobjects/newTodoInput"
import { todoList } from "../pageobjects/todoList"

export let preconditions = {
  todoIsCreated: (name) => {
    newTodoInput.enterTodoName(name)
    newTodoInput.submitTodo()
  },

  todoIsCompleted: (name) => {
    preconditions.todoIsCreated(name)
    todoList.completeCreatedTodo()
  },

  todoIsDeleted: (name) => {
      preconditions.todoIsCreated(name)
       todoList.deleteTodo()
       // na potrzeby tylko i wylacznie pokazania filtrow
       preconditions.todoIsCreated('dummy')
  },

  addFewTods: (names) => {
    cy.wrap(names).each( (name) => {
      preconditions.todoIsCreated(name)
    })
  }
}