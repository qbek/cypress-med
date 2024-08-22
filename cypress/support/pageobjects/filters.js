const filtersEl = '#filters'
const activeFilterEl = `${filtersEl} [href="#/active"]`
const completedFilterEl = `${filtersEl} [href="#/completed"]`

export const filters = {
  gotoActive: function () {
    cy.get(activeFilterEl).click()
  },

  gotoToCompleted: function() {
    cy.get(completedFilterEl).click()
  },

  gotoToAnywhere: function (where) {
    
  }
}