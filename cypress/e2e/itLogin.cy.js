describe('The power of Cypress', () => {

  before( () => {
    cy.visit('https://ticktick.com/signin')
    cy.get('input[type="text"]').type('lpgqxyzcetyxgjfvuq@nbmbb.com')
    cy.get('input[type="password"]').type('CKE_pfa1gjx0hud1fxa')
  })

  it('Invalid login', () => {
    const resp = {
      "errorId": "95yoj2mc@tw8",
      "errorCode": "invalid login",
      "errorMessage": "sdaf@wp.pl",
      "data": {
          "remainderTimes": 7
      }
    }
    cy.intercept('https://api.ticktick.com/api/v2/user/signon?wc=true&remember=true', {
      statusCode: 500,
      payload: resp
    })

    cy.get('input[type="password"]').type('{enter}')
  })

  it.only('Invalid password', () => {
    const resp = {
      "errorId": "95yoj2mc@tw8",
      "errorCode": "invalid pass",
      "errorMessage": "sdaf@wp.pl",
      "data": {
          "remainderTimes": 7
      }
    }
    cy.intercept('https://api.ticktick.com/api/v2/user/signon?wc=true&remember=true', {
      statusCode: 504,
      payload: resp
    })

    cy.get('input[type="password"]').type('{enter}')
  })
})