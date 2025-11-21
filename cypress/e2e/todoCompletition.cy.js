/// <reference types='cypress' />
import { newTodoInput } from "../support/pageobjects/newTodoInput"
import { todoList } from "../support/pageobjects/todoList"
import { todoFilters } from "../support/pageobjects/todoFilters"
import { todoMVCApp } from "../support/pageobjects/todoMVCApp"


describe('Test suite to verify todo completiotion', () => {

  beforeEach(() => {
    todoMVCApp.open()
  })

  it('User can complete a todo', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    newTodoInput.enterTodoName(todoToComplete)
    newTodoInput.submitTodo()
    todoList.completeCreatedTodo()
    todoList.checkTodoMarkedAsCompleted()
  })

  it('User can filter active todos', () => {
    let todoToComplete = 'To zadanie nie jest active'
    newTodoInput.enterTodoName(todoToComplete)
    newTodoInput.submitTodo()
    todoList.completeCreatedTodo()
    todoFilters.gotoActive()
    todoList.checkIsEmpty()
  })

  it('User can filter completed todos', () => {
    let todoToComplete = 'To zadanie jest completed'
    newTodoInput.enterTodoName(todoToComplete)
    newTodoInput.submitTodo()
    todoList.completeCreatedTodo()
    todoFilters.gotoCompleted()
    todoList.checkTodoExists(todoToComplete)
  })
})
