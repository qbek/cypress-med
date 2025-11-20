/// <reference types='cypress' />
import { newTodoInput } from "../support/pageobjects/newTodoInput"
import { todoList } from "../support/pageobjects/todoList"
import { todoFilters } from "../support/pageobjects/todoFilters"
import { todoMVCApp } from "../support/pageobjects/todoMVCApp"


describe('Test suite to verify todo completiotion', () => {
  it('User can complete a todo', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    todoMVCApp.open()
    newTodoInput.enterTodoName(todoToComplete)
    newTodoInput.submitTodo()
    todoList.completeTodo()
    todoList.checkTodoMarkedAsCompleted()
  })

  it('User can filter active todos', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    todoMVCApp.open()
    newTodoInput.enterTodoName(todoToComplete)
    newTodoInput.submitTodo()
    todoList.completeTodo()
    todoFilters.gotoActive()
    todoList.checkIsEmpty()
  })

  it('User can filter completed todos', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    todoMVCApp.open()
    newTodoInput.enterTodoName(todoToComplete)
    newTodoInput.submitTodo()
    todoList.completeTodo()
    todoFilters.gotoCompleted()
    todoList.checkTodoExists(todoToComplete)
  })
})
