/// <reference types='cypress' />

describe('Exercises', () => {

  it('Exercise 1', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')
    cy.get('#firstname').type('Kuba')
    cy.get('#lastname').type('szewc')
    cy.get('#email').type('wp@wp.pl{enter}')
    
    //klaszyczne klikniecie
    //cy.get('#email').type('wp@wp.pl')
    // cy.get('.btn-success').click()
    
    //wyszukiwanie po tekscie - uwata! blokuje testowanie lokalizacji strony
    // cy.contains('.btn', 'Zapisz').click()

    //submit formularza
    // cy.get('form').submit()
    cy.get('#firstname-check').should('have.text', 'Kuba')
    cy.get('#lastname-check').should('have.text', 'szewc')
    cy.get('.form-control-plaintext').should('have.value', 'wp@wp.pl')
  })

  it('Exercise 2a', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    //ANTYWZORZEC
    // cy.get('[name="green"]').click()
    
    //standardzik
    // cy.get('[name="red"]').check()
    // cy.get('[name="blue"]').check()

    cy.get('[type="checkbox"]').uncheck()
    cy.get('[type="checkbox"]').check(['red', 'blue'])

    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
  })

  it('Exercise 2b', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    
    cy.get('#switch').uncheck( {force:true} ) 
    
    cy.get('#text').should('be.disabled')
    cy.get('[for="switch"]').click( )
    cy.get('#text').should('be.enabled')
  })

  it.only('Exercise 3', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('input').check('radiozet')
    cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl')
    cy.get('#radiozet-details a').should('be.visible')


    cy.get('#radiozet-details').within( () => {
      cy.get('a').should('be.visible')
      cy.get('a').should('have.attr', 'href', 'https://www.radiozet.pl')
    })

    cy.get('#radiozet-details a').then( ($a) => {
      cy.wrap($a).should('be.visible')
      cy.wrap($a).should('have.attr', 'href', 'https://www.radiozet.pl')
    })
  })
})


