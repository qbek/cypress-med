/// <reference types='cypress' />
import { todoMVCApp } from "../support/pageobjects/todoMVCApp"
import { preconditions } from "../support/actions/preconditions"
import { todoList } from "../support/pageobjects/todoList"


describe('Test suite to verify todo deletion', () => {
  it('User can delete a todo', () => {
    let todoToDelete = "Usuń mnie!!! Natychmiast!!!"
    todoMVCApp.open()
    preconditions.todoIsCreated(todoToDelete)
    todoList.deleteTodo()
    todoList.checkIsEmpty()
  })

  it('Deleted todo is not on completed filter', () => {

  })
})