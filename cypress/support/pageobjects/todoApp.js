const TODOMVC_URL = 'https://todomvc.com/examples/jquery/dist/#/all'

export const app = {
    openMainView: function() {
         cy.visit(TODOMVC_URL)
    }
}