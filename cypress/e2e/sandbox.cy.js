describe('test', () => {

  beforeEach( () => {
    cy.session('userName', () => {
      cy.visit('https://ticktick.com/signin')
      cy.get('input[type="text"]').type('lpgqxyzcetyxgjfvuq@nbmbb.com')
      cy.get('input[type="password"]').type('CKE_pfa1gjx0hud1fxa{enter}')
      cy.get('#container-main').should('be.visible')
    })
    cy.visit('https://ticktick.com/webapp/#p/inbox/tasks')
  })

  it('test1', () => {
    
  })

  it('test2', () => {

  })

 
})

function logowaniePrzezBackend () {
  const body = {
    "password": "CKE_pfa1gjx0hud1fxa",
    "username": "lpgqxyzcetyxgjfvuq@nbmbb.com"
}
  cy.request('POST', 'https://api.ticktick.com/api/v2/user/signon?wc=true&remember=true', body)
}