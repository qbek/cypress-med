/// <reference types='cypress' />

describe('Test suite for exercise 3', () => {

  it('User can check FM radio web page', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('.form-check-input').check(['radiozet'])

    // cy.get('#radiozet-details').find('a')
    cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl')
    cy.get('#radiozet-details a').should('be.visible')
  })

})