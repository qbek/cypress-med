const ACTIVE_FILTER_SELECTOR = '#filters [href="#/active"]'
const COMPLETED_FILTER_SELECTOR = '#filters [href="#/completed"]'


export const todoFilters = {
    gotoActive: function() {
        cy.get(ACTIVE_FILTER_SELECTOR).click()
    },
    gotoCompleted: function() {
        cy.get(COMPLETED_FILTER_SELECTOR).click()
    }
}
