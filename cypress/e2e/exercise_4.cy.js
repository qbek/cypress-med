/// <reference types='cypress' />

describe("Test suite for page 4", () => {
  it("User can win!", () => {
    cy.visit('https://qbek.github.io/selenium-exercises/pl/selects.html')
  
    // cy.get('#question1 select').select('4')
    // cy.get('#quesiton1 button').click()  

    cy.get('#question1').within( () => {
        cy.get('select').select('4')
        cy.get('button').click()
    })

    cy.get('#question2 select').select('words-7')
    cy.get('#question2 button').click() 
  })

})

