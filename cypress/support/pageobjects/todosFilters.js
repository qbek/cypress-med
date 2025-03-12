const activeFilterSelector = '#filters [href="#/active"]'
const completedFiterSelector = '#filters [href="#/completed"]'


export const todosFilters = {
  gotoActive: function () {
    cy.get(activeFilterSelector).click()
  },

  gotoCompleted: function() {
    cy.get(completedFiterSelector).click()
  }
}