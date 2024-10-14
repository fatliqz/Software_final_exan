//การเขียนให้เป็น JAVA Class
class loginPage {
    get loginSucessText() {
        return cy.get('#flash')
    }
    //Action
    verifyLoginSucessText() {
        this.loginSucessText.should('contain.text', ' You logged into a secure area!')
    }
    get loginErrorUsername() {
        return cy.get('#flash')
    }
    //Action
    verifyLoginErrorUsername() {
        this.loginErrorUsername.should('contain.text', 'Your username is invalid!');
    }
    get loginErrorPassword() {
        return cy.get('#flash')
    }
    //Action with parameter
    verifyLoginErrorPassword(Text) {
        this.loginErrorPassword.should('contain.text', ' Your password is invalid!');
    }
}
export default new loginPage();