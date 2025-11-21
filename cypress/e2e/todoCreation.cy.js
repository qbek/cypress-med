/// <reference types='cypress' />

import { newTodoInput } from "../support/pageobjects/newTodoInput"
import { todoList } from "../support/pageobjects/todoList"
import { todoMVCApp } from "../support/pageobjects/todoMVCApp"
import { preconditions } from "../support/actions/preconditions"
import { todoFilters } from "../support/pageobjects/todoFilters"


describe('Test suite for todo creatin tests', () => {
  it('User can creata a todo', () => {
    let todoName = 'jeszcze lepsze zadanie'
    todoMVCApp.open()
    newTodoInput.enterTodoName(todoName)
    newTodoInput.submitTodo()
    todoList.checkOnlyTodoExists(todoName)
  })

  it('Created todo is on Active tab', () => {
    let name = 'test'
    todoMVCApp.open()
    preconditions.todoIsCreated(name)
    todoFilters.gotoActive()
    todoList.checkTodoExists(name)
  })

  it.only('User can add few todos', () => {
    let todo1 = "todo1"
    let todo2 = "todo2"
    let todo3 = "todo3"

    todoMVCApp.open()
    preconditions.todoIsCreated(todo1)
    preconditions.todoIsCreated(todo2)
    preconditions.todoIsCreated(todo3)

    //1 sposob na sprawdzenie
    // ocena ryzyka - mozna poluzowac ta asercje na contains o ile
    // dobrze sprawdzimy
    todoList.checkTodoExists(todo1)
    todoList.checkTodoExists(todo2)
    todoList.checkTodoExists(todo3)
  })
})