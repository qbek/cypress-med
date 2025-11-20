/// <reference types='cypress' />

const ACTIVE_TAB = '[href="#/active"]'
const COMPLETED_TAB = '[href="#/completed"]'

export let todoFilters = {
  gotoActive: () => {
    cy.get(ACTIVE_TAB).click()
  },

  gotoCompleted: () => {
    cy.get(COMPLETED_TAB).click()
  }
}