const myProjectsMenuButton = '[aria-label="My projects menu"]'
const taskItem = '#projects_list li'

export const myProjects = {
  clickPlusButton: function () {
    cy.get(myProjectsMenuButton).click()
  },

  checkIfProjectListed: function (projectName) {
    // cy.get(projectsList).should('contain.text', name)
    let todos = []
    cy.get(taskItem).each( ($todo) => {
      todos.push($todo.text())
    })
    cy.wrap(todos).should('include', projectName)
  }
}