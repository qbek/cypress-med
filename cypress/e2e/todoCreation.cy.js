/// <reference types='cypress' />

import { newTodoInput } from "../support/pageobjects/newTodoInput"
import { todoList } from "../support/pageobjects/todoList"
import { todoMVCApp } from "../support/pageobjects/todoMVCApp"

describe('Test suite for todo creatin tests', () => {
  it('User can creata a todo', () => {
    let todoName = 'jeszcze lepsze zadanie'
    todoMVCApp.open()
    newTodoInput.enterTodoName(todoName)
    newTodoInput.submitTodo()
    todoList.checkTodoExists(todoName)
  })
})