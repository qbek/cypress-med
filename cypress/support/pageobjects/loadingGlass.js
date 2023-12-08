const loadingGlassEl = '#loading'

export const loadingGlass = {
  isVisible: function () {
    cy.get(loadingGlassEl).should('be.visible')
  },

  isNotVisible: function () {
    cy.get(loadingGlassEl).should('be.not.visible')
  }
}