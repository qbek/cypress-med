export let todoMVCApp = {
  open: () => {
    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all')
  }
}