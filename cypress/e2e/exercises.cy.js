/// <reference types="cypress" />

describe("Example exercise", () => {
  it("Exercise 1", () => {
    cy.visit("https://qbek.github.io/selenium-exercises/pl/basic_form.html")
    cy.get('#firstname').type('Jakub')
    cy.get('#lastname').type('Szewczyk')
    // cy.get('#email').type('swieta@karp.pl')

    //submit formularza przez nacisniecie enter
    cy.get('#email').type('swieta@karp.pl{enter}')

    // submit poprzez klikniecie w przycis
    // cy.get('.btn-success').click()

    // znajdujemy przycisk po tekscie wyswietlanym (UWAGA!!! lokalizacje jezykwe stron odpadaja)
    // cy.contains('Zapisz').click()

    //submit formularza zawierajacego przycisk
    // cy.get('form').submit()


    cy.get('#firstname-check').should('have.text', 'Jakub')
    cy.get('#lastname-check').should('have.text', 'Szewczyk')
    cy.get('.form-control-plaintext').should('have.value', 'swieta@karp.pl')
  })

  it("Exercise 2a", () => {
    cy.visit("https://qbek.github.io/selenium-exercises/pl/check_boxes.html")
    
    //anty pattern - nie klikamy po checkboxach!!! NIGDY!!!
    // cy.get('[name="red"]').click()

    //wybieram wszystkie checkboxy i zaznaczam po value
    // cy.get('input[type="checkbox"]').check('red')
    // cy.get('input[type="checkbox"]').check('blue')
    
    //optymalne rozwiazanie
    cy.get('input[type="checkbox"]').check(['red', 'blue'])
    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
  })

  it('Exercise 2b', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    cy.get('#text').should('be.disabled')
    cy.get('#switch').uncheck( {force: true} )  
    cy.get('.custom-control-label').click()  
    cy.get('#text').should('be.enabled')
  })

  it.only('Exercise 3', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('input').check('radiozet')
    cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl')
    cy.get('#radiozet-details a').should('be.visible')

    cy.get('#radiozet-details a').then( ($el) => {
      //tutaj mam juz znaleziony element  zmiennej $el
      cy.wrap($el).should('have.attr', 'href', 'https://www.radiozet.pl')
      cy.wrap($el).should('be.visible')
    })

    cy.get('#radiozet-details').within( ()=> {
      cy.get('a').should('have.attr', 'href', 'https://www.radiozet.pl')
    })
  })
})