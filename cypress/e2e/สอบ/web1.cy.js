import loginpage from "../../support/loginpage"
describe('example', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login?fbclid=IwY2xjawF5nMBleHRuA2FlbQIxMAABHQxYtJ9NZEQJJxkvr4ih9-7MZwJLekCxs7spa_jb4tOtQgq4oSY9FdyFbg_aem_5mEpr2xewjFw6LPcFzBfcw')
    })
    it('TC-01', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        // cy.wait(3000)
        cy.get('.radius').click();
        cy.url().should("include", "/secure");

        loginpage.verifyLoginSucessText()
        // cy.wait(10000)
        // cy.get('.button').click();

    })

    it('TC-02', () => {
        cy.get('#username').type('incorrectUser');
        cy.get('#password').type('SuperSecretPassword!');
        // cy.wait(3000)
        cy.get('.radius').click();
        // cy.get('#flash').should('contain.text', 'Your username is invalid!');
        loginpage.verifyLoginErrorUsername()
        cy.screenshot('username is invalid!')

    })

    it('TC-03', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('incorrectPassword');
        // cy.wait(3000)
        cy.get('.radius').click();
        // cy.get('#flash').should('contain.text', ' Your password is invalid!');
        loginpage.verifyLoginErrorPassword()
        cy.screenshot('password is invalid!')

    })
})