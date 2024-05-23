const myProjectsMenuButton = '[aria-label="My projects menu"]'
const taskItem = '#projects_list li'

export const myProjects = {
  clickPlusButton: function () {
    cy.get(myProjectsMenuButton).click()
  },

  checkIfProjectListed: function (projectId, projectName) {
    // cy.get(projectsList).should('contain.text', name)
    // let todos = []
    // cy.get(taskItem).each( ($todo) => {
    //   todos.push($todo.text())
    // })
    // cy.wrap(todos).should('include', projectName)

    cy.get('#projects_list').find(`[data-id="${projectId}"]`)
      .should('have.text', projectName)

  }
}