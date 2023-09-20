/// <reference types="cypress" />


describe('template spec', () => {
  it('exercise 1', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')
    cy.get('#firstname').type('Jakub')
 
    cy.get('#lastname').type('Szewczyk')

    //wpisanie + klikniecie w button
    // cy.get('#email').type('wp@wp.pl')
    // cy.get('.btn-success').click()

    //na skróty symulacja nacisniecia enter
    cy.get('#email').type('wp@wp.pl{enter}')

    //poprzez submitowanie formularza
    // cy.get('#email').type('wp@wp.pl')
    // cy.get('form').submit()

    cy.get('#firstname-check').should('have.text', 'Jakub')
    cy.get('#lastname-check').should('have.text', 'Szewczyk')

 
    // cy.contains('Sprawdz dane:') --> znajdzie h5, ponieważ ten element zawiera ten teskt
    cy.contains('.card', 'Sprawdź dane:').find('input').should('have.value', 'wp@wp.pl')
    
    //rozne spospoby dobrania sie do propertasów (value)
    cy.get('input[type="lead"]').should('have.value', 'wp@wp.pl')
    cy.get('input[type="lead"]').then($el => {
      expect($el.val()).be.eql('wp@wp.pl') //czyste jQuery
      cy.wrap($el).should('have.value', 'wp@wp.pl') //ok, ale bez sensu [aka. powrot do CyPress]
    })
    cy.get('input[type="lead"]').invoke('val').should('be.eql', 'wp@wp.pl')
 
  })
})