class LoginPage {
    elements = {
        usernameInput: () => cy.get('#tl_login'),
        passwordInput: () => cy.get('#tl_password'),
        loginButton: () => cy.get('#tl_login_button'),
    };
}

export default LoginPage;