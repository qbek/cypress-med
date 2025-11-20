/// <reference types='cypress' />

describe('Tests from exercise 1 page', () => {

  it('Fill form test', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')
    cy.get('#firstname').type('Kuba@')
    cy.get('#lastname').type('Szewczyk')

    // wpisanie tekstu i nacisniecie enter
    cy.get('#email').type('email@wp.pl{enter}')
    
    // submitowanie calego formularza
    // cy.get('#email').type('email@wp.pl')
    // cy.get('form').submit()

    // klasyczne klikniecie w przycisk
    // cy.get('.btn-success').click()

    // alternatywa - szukanie po tekście na stronie (nie polecam - lokalizacje strony!!!)
    // cy.contains('Zapisz').click()

    cy.get('#firstname-check').should('have.text', 'Kuba@')
    cy.get('#lastname-check').should('have.text', 'Szewczyk')
    cy.get('.form-control-plaintext').should('have.value', 'email@wp.pl')
  })

  
})

