/// <reference types='cypress' />

describe('Basic exercises suite', () => {
    it('Exercise 1', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/en/basic_form.html')

        cy.get('#firstname').type('Kuba')
        cy.get('#lastname').type('Szewc')
        cy.get('#email').type('wp@wp.pl')

        // cy.contains('Save').click()
        // cy.get('.btn-success').click()
        cy.get('form').submit()

        cy.get('#firstname-check').should('have.text', 'Kuba')
        cy.get('#lastname-check').should('have.text', 'Szewc')
        cy.get('.form-control-plaintext').should('have.value', 'wp@wp.pl')


    })

    it('Exercise 2a', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/en/check_boxes.html')

        // clicking checkboxes are antipattern
        // cy.get('[name="red"]').click()
        // cy.get('[name="green"]').click()
        // cy.get('[name="blue"]').click()

        // first uncheck everythig
        cy.get('[type="checkbox"]').uncheck()

        // check back what you need
        cy.get('[name="red"]').check()
        // cy.get('[name="red"]').check()
        cy.get('[name="blue"]').check()

        // selecting checkboxex by value
        // cy.get('[type="checkbox"]').check(['red', 'blue'])
        // cy.get('[type="checkbox"]').check('blue')

        cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
    })

    it('Exercise 2b', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/en/check_boxes.html')
        // cy.get('[for="switch"]').click()
        cy.get('#text').should('be.disabled')
        
        // this element is covered by [for="switch"] elemnent
        // cy.get('#switch').check()
        // so lets clikc it!
        // cy.get('[for="switch"]').click()

        // Luke! Use the force!!!
        // cy.get('#switch').check( {force: true} )

        cy.get('#switch').uncheck( {force: true} )
        cy.get('[for="switch"]').click()

        cy.get('#text').should('be.enabled')
    })

    it('exercise 3', () => {
        cy.visit('https://qbek.github.io/selenium-exercises/en/radio_buttons.html')

        // cy.get('[type="radio"]').check('radiozet')
        // cy.get('[value="radiozet"]').check()
        cy.get('[value="polskieradio"]').check()

        // cy.get('#radiozet-details').find('a').click()
        cy.get('#radiozet-details a').should('have.attr', 'href', 'https://www.radiozet.pl')
        cy.get('#radiozet-details a').should('be.visible')
    })

})