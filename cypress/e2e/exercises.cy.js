/// <reference types="cypress" />

describe('exercises', function () {
  it.only('Exercise 1', function () {
      cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')

      //structura komendy cypress:
      // cy.<funkcja szukajaca elementu>.<funckja interakcji z elementem>

      //wprowadzanie tekstu    
      // cy.get('#firstname').type('Kuba')
      //alternatywa poprzez wyszukiwanie sfocusowanego elementu
      // cy.get('#firstname').click()
      // cy.get(':focus').type('Kuba')
      // cy.get('#lastname').type('Szewczyk')
      // cy.get('#email').type('kuba@szewczyk.com')

      const f = cy.get('#firstname')
      cy.get('#lastname').type('szzz')

      // l.type('test')
      f.type('another')


      
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

  it('Exercise 2a', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    
    //antypattern - po checkboxach sie nie klika
    // cy.get('[name="red"]').click()
    // cy.get('[name="blue"]').click()

    //kolejny anty wzorzec
    // bo trzeba pisac selector do kazdego checkboxa osobno
    
    cy.get('[name="red"]').check()
    cy.get('[name="green"]').uncheck()
    cy.get('[name="blue"]').check()

    // cy.get('[type="checkbox"]').uncheck()
    // cy.get('[type="checkbox"]').check(['red', 'blue'])
    

    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')

  })

  it('Exercise 2b', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    // trochę pójscie na skróty i omijanie przykrywającego elementu
    // cy.get('#switch').check({force:true})

    cy.get('#switch').uncheck({force:true})
    cy.get('[for="switch"]').click()
    cy.get('#text').should('be.enabled')
  })

  it('Exercise 3', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('input').check('radiozet')
    // cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl')
    // cy.get('#radiozet-details a').should('be.visible')

    //zamiast zapisu css, mozna rozbic na poziomie cypress
    // cy.get('#radiozet-details').find('a').should('have.attr', 'href', 'https://www.radiozet.pl')

    cy.get('#radiozet-details a').then(function ($el) {
      //jezeli chcesz zostac w kontekscie jQuery uzywasz czystego chai + funkcje jQuery
      // expect($el.attr('href')).be.eql('https://www.radiozet.pl');
      cy.wrap($el).should('have.attr', 'href', 'https://www.radiozet.pl')
      cy.wrap($el).should('be.visible')
    })

    //ograniczenie kontekstu cypress do danego elementy
    // (nie szukamy na calej stronie, tylko wewnatrze elementu)
    cy.get('#radiozet-details').within(function () {
      cy.get('a').should('have.attr', 'href', 'https://www.radiozet.pl')
    })
  })

})