// cypress/pages/home.page.js
class HomePage {
  get welcomeMessage() { 
    return cy.get('.post-title'); 
  }
}
export default HomePage;
