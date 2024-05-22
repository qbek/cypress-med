/// <reference types="cypress" />

describe('exercises to practice', () => {
  it('Exercise 1', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')
    cy.get('#firstname').type('Kuba')
    cy.get('#lastname').type('Szewczyk')
    cy.get('#email').type('wp@wp.pl')
    // cy.get('.btn-success').click()

    //wyszukiwanie po tekscie
    // cy.contains('Zapisz').click()
    cy.get('form').submit()

    cy.get('#firstname-check').should('have.text', 'Kuba')
    cy.get('#lastname-check').should('have.text', 'Szewczyk') 
    cy.get('.form-control-plaintext').should('have.value', 'wp@wp.pl')
  })

  it('Exercise 2', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    //antypattern
    // cy.get('[name="red"]').click()
    // cy.get('[name="blue"]').click()


    // cy.get('[name="red"]').check()
    // cy.get('[name="blue"]').check()

    cy.get('[type="checkbox"]').uncheck()
    cy.get('[type="checkbox"]').check(['red', 'blue'])
    

    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
  })

  it('Exercise 2b', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    // trochę pójscie na skróty i omijanie przykrywającego elementu
    // cy.get('#switch').check({force: true})

    cy.get('#switch').uncheck({force:true})
    cy.get('[for="switch"]').click()
    cy.get('#text').should('be.enabled')
  })

  it.only('Exercise 3', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('input').check('radiozet')
    // cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl')
    // cy.get('#radiozet-details a').should('be.visible')

    // alternatywa 1
    // cy.get('#radiozet-details').find('a')
    
    // alternatywa 2
    cy.get('#radiozet-details').within( () => {
      cy.get('a').should('have.attr', 'href', 'https://www.radiozet.pl')
      cy.get('a').should('be.visible')
    })

    //alternatywa
    cy.get('#radiozet-details').then( ($el) => {
      cy.wrap($el).find('a').should('be.visible')
    })
  })
})


// cy.<znajdz element>.<akcja na elemencie>


