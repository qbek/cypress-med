/// <reference types='cypress' />
import { newTodoInput } from "../support/pageobjects/newTodoInput"
import { todoList } from "../support/pageobjects/todoList"
import { todoFilters } from "../support/pageobjects/todoFilters"
import { todoMVCApp } from "../support/pageobjects/todoMVCApp"
import { preconditions } from "../support/actions/preconditions"

describe('Test suite to verify todo completiotion', () => {

  beforeEach(() => {
    todoMVCApp.open()
  })

  it('User can complete a todo', () => {
    let todoToComplete = 'To zadanie trzeba zrobić'
    preconditions.todoIsCreated(todoToComplete)
    todoList.completeCreatedTodo()
    todoList.checkTodoMarkedAsCompleted()
  })

  it('User can filter active todos', () => {
    let todoToComplete = 'To zadanie nie jest active'
    // given 
    // te kroki zmieniamy na jeden krok - precondition
    // newTodoInput.enterTodoName(todoToComplete)
    // newTodoInput.submitTodo()
    // todoList.completeCreatedTodo()
    // to jest ten krok
    preconditions.todoIsCompleted(todoToComplete)
    //when
    todoFilters.gotoActive()
    //then
    todoList.checkIsEmpty()
  })

  it('User can filter completed todos', () => {
    let todoToComplete = 'To zadanie jest completed'
    preconditions.todoIsCompleted(todoToComplete)
    todoFilters.gotoCompleted()
    todoList.checkTodoExists(todoToComplete)
  })
})
