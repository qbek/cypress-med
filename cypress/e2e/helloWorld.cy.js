describe('Hello world test suie', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('kolejny test', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
  })
})


// ** DEFINICJA SUITy TESTóW
// describe('Nazw


// ** DEFINICJA TESTU
// it('nazwa testu', () => { ...kod naszego testu... })