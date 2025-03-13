describe('Integraiont login', () => {
  before( () => {
    cy.visit('https://ticktick.com/signin')
    cy.get('input[type="text"]').type('lpgqxyzcetyxgjfvuq@nbmbb.com')
    cy.get('input[type="password"]').type('CKE_pfa1gjx0hud1fxa')
  })


  it('invalid login', () => {
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
      body: resp
    })
    cy.get('input[type="password"]').type('{enter}')
  })

  it('invalid password', () => {
    const resp = {
      "errorId": "95yoj2mc@tw8",
      "errorCode": "invalid password",
      "errorMessage": "sdaf@wp.pl",
      "data": {
          "remainderTimes": 7
      }
    }

    cy.intercept('https://api.ticktick.com/api/v2/user/signon?wc=true&remember=true', {
      statusCode: 500,
      body: resp
    }) 
    cy.get('input[type="password"]').type('{enter}')
  })

  it('invalid 404', () => {
    const resp = {
      "errorId": "95yoj2mc@tw8",
      "errorCode": "invalid password",
      "errorMessage": "sdaf@wp.pl",
      "data": {
          "remainderTimes": 7
      }
    }

    cy.intercept('https://api.ticktick.com/api/v2/user/signon?wc=true&remember=true', {
      statusCode: 404,
      body: resp
    }) 
    cy.get('input[type="password"]').type('{enter}')
  })

  it('ss', () => {
    const resp = {
     
    }

    cy.intercept('https://api.ticktick.com/api/v2/user/signon?wc=true&remember=true', {
      statusCode: 200,
      body: resp
    }) 
    cy.get('input[type="password"]').type('{enter}')
  })

})