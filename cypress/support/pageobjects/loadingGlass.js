export const loadingGlass = {
  waitForClose: function () {
    cy.get('[data-testid="top_bar"]', {timeout: 15000}).should('be.visible')
  }
}