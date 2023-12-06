/// <reference types="cypress" />

describe('Example exercises', function () {
  it('Exercises 1', function () {
      //kroki scenariusza
      cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')
      cy.get('#firstname').type('Jakub')
      cy.get('#lastname').type('Szewczyk')
      // cy.get('#email').type('swieta@karp.pl')
      
      //z wykorzystniem css
      // cy.get('.btn-success').click()
      //z wykorzystaniem wyswietlanego tekstu
      // cy.contains('Zapisz').click()

      //sumitowanie formularza
      // cy.get('form').submit()

      //wcisniecie enter
      cy.get('#email').type('swieta@karp.pl{enter}')

      cy.get('#firstname-check').should('have.text', 'Jakub')
      cy.get('#lastname-check').should('have.text', 'Szewczyk')
      cy.get('.form-control-plaintext').should('have.value', 'swieta@karp.pl')
  })

})
