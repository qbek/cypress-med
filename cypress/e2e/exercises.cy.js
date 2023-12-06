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

  it('Exercise 2a', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    // zle podejscie - wymaga sprawdzenia stanu po kliknieciu
    // cy.get('[name="red"]').click()
    // cy.get('[name="blue"]').click()

    // cy.get('[name="red"]').check()
    // cy.get('[name="blue"]').check()
    
    //uzywajac attrybutu value w checkboxie
    // cy.get('[type="checkbox"]').check('red')
    // cy.get('[type="checkbox"]').check('blue')
    // cy.get('[type="checkbox"]').check(['blue', 'red'])

    //find -> wyszukuje elementy wewnatrz elementu (z get)
    cy.get('form').find('[type="checkbox"]').check(['blue', 'red'])
   

    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
    //to samo ale z wykorzystaniem fukcji jQuery wolanej poprzez metode invoke()
    cy.get('#light').invoke('attr', 'data-color').should('be.eql', '#FF00FF')
  })

  it('Exercise 2b', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    
    cy.get('#switch').check({force:true})  
    // alternatywa: zasymulowanie czlowieka czyli klikniecie w przykrywajacy element
    // cy.get('[for="switch"]').click()

    //połączenie najlepszych cech obu podejść
    // cy.get('#switch').uncheck({force:true})  
    // cy.get('[for="switch"]').click()
  
    cy.get('#text').should('be.enabled')
  })

  it.only('Exercise 3', function () {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('input').check('radiozet')
   
    cy.get('#radiozet-details').find('a').should('have.attr', 'href', 'https://www.radiozet.pl')
    cy.get('#radiozet-details').find('a').should('be.visible')

    //alternatywa aby nie szykac tego samego elementu raz za razem
    cy.get('#radiozet-details').find('a').then(function ($a) {
      //$a jest obiektem jQuery reprezentujacym element na stronie
      // expect($a.attr('href')).to.be.eql('https://www.radiozet.pl')
      cy.wrap($a).should('have.attr', 'href', 'https://www.radiozet.pl')          
      cy.wrap($a).should('be.visible')
    })

    //ograniczenie wyszukiwania do wnetrza elementu #radiozet-details
    cy.get('#radiozet-details').within(function () {
      cy.get('a').should('have.attr', 'href', 'https://www.radiozet.pl') 
    })

    cy.contains('.card', 'Wybrane radio').find('[href="https://www.radiozet.pl"]').should('be.visible')
  })
})
