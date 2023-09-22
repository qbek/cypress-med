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

  it('exercise 2a', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    
    //prymitywne podejscie
    // cy.get('[name="red"]').check();
    // cy.get('[name="blue"]').check();

    //check by value
    // cy.get('[type="checkbox"]').check('red')
    // cy.get('[type="checkbox"]').check('blue')

    //zanzaczenie kilku naraz
    cy.get('[type="checkbox"]').check(['red', 'blue'])
  
    // cy.get('form').then($form => {
    //   cy.wrap($form).find('[name="red"]').check()
    //   cy.wrap($form).find('[name="blue"]').check()
    // })
    
    //ograniczenie operacji cypress do wnetrza <form> elementu
    // cy.get('form').within( () => {
    //   cy.get('[name="red"]').check()
    //   cy.get('[name="blue"]').check()    
    // })
    
    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
    cy.get('#light').invoke('attr', 'data-color').should('be.eql', '#FF00FF')
  })

  it('exercise 2b', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')
    // cy.get('#switch').check({force:true})
    cy.get('.custom-control-label').click()
    cy.get('#text').should('be.enabled')
  })

  it('example 3', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/radio_buttons.html')
    cy.get('input').check('radiozet')
    cy.get('#radiozet-details a').then($a => {
      cy.wrap($a).should('have.attr', 'href', 'https://www.radiozet.pl')
      cy.wrap($a).should('be.visible')
    })
  })

  it('test', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/sample.html')
    
    cy.contains('div', 'A').find('span')
    cy.get('div:contains("A")').find('span')
    cy.get('div').not(':contains("A")').find('span')

    // cy.get('div:contains("A")').should('have.text', 'A\naaa')
    // cy.get('div').not(':contains("A")').should('have.text', 'aaa')

    cy.contains('div', new RegExp('^(\\s)+aaa')).find('span')

  })

  it('example 4', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/selects.html')
    cy.get('#question1').within( () => {
      cy.get('select').select('4')
      cy.get('button').click()
    }) 
  })

  it.only('alias as return value replace', () => {
    cy.wrap(1).as('num')

    cy.get('@num').then( num => {
      num++
      cy.log(num)
      cy.wrap(num).as('num')
    })

    cy.get('@num').then( num => {
      cy.log('pierwszy: ', num)
    })

    cy.get('@num').then( num => {
      num++
      return num
    }).as('num')

    cy.get('@num').then( num => {
      cy.log('drugi: ', num)
    })
    
    cy.get('@num').then( num => ++num ).as('num')


    cy.get('@num').then( num => {
      cy.log('koniec: ', num)
    })
  })

  it('web element as alias', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/basic_form.html')

    // cy.get('form #firstname').type('Jakub')
    // cy.get('form #lastname').type('Szewczyk')

    cy.get('form').as('form')
    cy.get('@form').find('#firstname').type('Jakub')
    cy.get('@form').find('#lastname').type('Szewczyk')

  })
})