const addProjectButton = '[aria-label="Add project"]'
const projectListEl = '#projects_list'


export const projectList = {
  addNewProjectClick: function () {
    cy.get(addProjectButton).click()
  },

  assertProjectExists: function (id, name) {
    cy.get(`${projectListEl} [data-id="${id}"]`).should('be.visible')
    cy.get(`${projectListEl} [data-id="${id}"]`).within( () => {
      cy.get('a').should('have.text', name)
      cy.get('a').should('have.attr', 'href', `/app/project/${id}`)
    })
  }
}

