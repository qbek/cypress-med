/// <reference types='cypress' />

describe('Exercises for checkboxes', () => {

  it('User can mix colors', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    //w przypadku checkboxów/radio buttonów jest to antypattern
    // cy.get('[name="red"]').click()
    // cy.get('[name="blue"]').click()

    // cy.get('[name="red"]').check()
    // cy.get('[name="green"]').uncheck()
    // cy.get('[name="blue"]').check()

    cy.get('.form-check-input').uncheck()
    cy.get('.form-check-input').check(['red', 'blue'])

    cy.get('#light').should('have.attr', 'data-color', '#FF00FF')
  })

  it('User can enabl e text field', () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/check_boxes.html')

    cy.get('#switch').uncheck({ force: true })

    cy.get('#text').should('be.disabled')
    // pelna symulacja osobnika ludzkiego - klika w to co widzi
    cy.get('.custom-control-label').click()
    // wymuszenie na sile klikniecia chocby nie wiem co
    // cy.get('#switch').check( {force:true} )
    cy.get('#text').should('be.enabled')

  })
})