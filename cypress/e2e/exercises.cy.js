/// <reference types="cypress" />
describe('First exercises', () => {
  it('exercise 1', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')

    cy.get('#firstname').type('Kuba')
    cy.get('#lastname').type('Szewczyk')
    cy.get('#email').type('kuba@szewczyk.com')

    // selektor css
    // cy.get('.btn-success').click()
    
    // po tekście
    // cy.contains('Zapisz').click()

    cy.get('form').submit()

    cy.get('#firstname-check').should('have.text', 'Kuba')
    cy.get('#lastname-check').should('have.text', 'Szewczyk') 
    cy.get('.form-control-plaintext').should('have.value  ', 'kuba@szewczyk.com')
  })

  it('exercise 2a', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    
    //antypattern - po checkboxach sie nie klika
    // cy.get('[name="red"]').click()
    // cy.get('[name="blue"]').click()

    //kolejna zla praktyke
    // bo trzeba pisac selector do kazdego checkboxa osobno    
    // cy.get('[name="red"]').check()
    // cy.get('[name="blue"]').check()    

    cy.get('[type="checkbox"]').uncheck()
    cy.get('[type="checkbox"]').check(['red', 'blue'])

    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
  })

  it.only('exercise 2b', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    // trochę pójscie na skróty i omijanie przykrywającego elementu
    // cy.get('#switch').check({force:true})

    cy.get('#switch').uncheck({force:true})
    cy.get('[for="switch"]').click()
    cy.get('#text').should('be.enabled')
  })
})