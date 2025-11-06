import LoginPage from '../elements/login';

const loginPg = new LoginPage();

class LoginDomainLogic {

    loginToApplication(username, password) {
        cy.visit('');
        loginPg.elements.usernameInput().type(username);
        loginPg.elements.passwordInput().type(password);
        loginPg.elements.loginButton().click();
    }

}

export default LoginDomainLogic;