describe('todoist projects', () => {
  it('User can create new project', () => {
    cy.visit('https://todoist.com/auth/login')
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
    cy.get('#element-0').type('gbinxeqerpnywwysux@awdrt.org')
    cy.get('#element-3').type('ti4FCvBL39i7mMq')
    cy.get('form').submit()
    cy.get('#loading', {timeout: 10000}).should('not.be.visible')
    cy.get('[data-testid="top_bar"]').should('be.visible')
  
    cy.get('[aria-label="Add project"]').click()
    cy.get('#edit_project_modal_field_name').type('To jest moj projekt{enter}')
    cy.get('[data-testid="view_header"] .simple_content').should('have.text', 'To jest moj projekt')
    
    //problem: zbyt luźna asercja, potencjalny false positive ('project 1', 'project 11')
    cy.get('#projects_list').should('contain.text', 'To jest moj projekt')
    
  })  
})