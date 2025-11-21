import { newTodoInput } from "../pageobjects/newTodoInput"
import { todoList } from "../pageobjects/todoList"

export let preconditions = {

  todoIsCreated: (name) => {
    newTodoInput.enterTodoName(name)
    newTodoInput.submitTodo()
  },

  todoIsCompleted: (name) => {
    todoIsCreated(name)
    todoList.completeCreatedTodo()
  }
}