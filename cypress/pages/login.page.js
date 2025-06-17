// cypress/pages/login.page.js
class LoginPage {
  visit() { 
    cy.visit('/practice-test-login'); 
  }
  fillUsername(name) { 
    cy.get('#username').type(name); 
  }
  fillPassword(pass) { 
    cy.get('#password').type(pass); 
  }
  submit() { 
    cy.get('button[class="btn"]').click(); 
  }
}
export default LoginPage;
