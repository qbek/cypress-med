/// <reference types="cypress" />

describe('exercises', function () {
  it('Exercise 1', function () {
      cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')

      //structura komendy cypress:
      // cy.<funkcja szukajaca elementu>.<funckja interakcji z elementem>

      //wprowadzanie tekstu    
      cy.get('#firstname').type('Kuba')
      //alternatywa poprzez wyszukiwanie sfocusowanego elementu
      // cy.get('#firstname').click()
      // cy.get(':focus').type('Kuba')
      cy.get('#lastname').type('Szewczyk')
      // cy.get('#email').type('kuba@szewczyk.com')

      // klikniecie w przycisk
      // po selektorze css
      // cy.get('.btn-success').click()
      // wyszukiwanie po tekscie elementu
      // cy.contains('Zapisz').click()

      //submitowanie całego formularza
      // cy.get('form').submit()

      //nacisniecie enter w ostatnim elemencie formularza
      cy.get('#email').type('kuba@szewczyk.com{enter}')

      //assercje == sprawdzanie porawnosci dzialania systemu
      cy.get('#firstname-check').should('have.text', 'Kuba')
      cy.get('#lastname-check').should('have.text', 'Szewczyk')
      cy.get('.form-control-plaintext').should('have.value', 'kuba@szewczyk.com')
  })


})