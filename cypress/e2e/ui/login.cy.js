// cypress/e2e/ui/login.cy.js
import LoginPage from '../../pages/login.page';
import HomePage from '../../pages/home.page';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('UI 测试示例', () => {
  it('登录成功', () => {
    // Use the page object to complete the login operation and assert the welcome message after login
    loginPage.visit();
    loginPage.fillUsername('student');
    loginPage.fillPassword('Password123');
    loginPage.submit();
    homePage.welcomeMessage.should('contain', 'Logged In Successfully');
  });
});
