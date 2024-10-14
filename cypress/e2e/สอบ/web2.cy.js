// import loginpage from "../../support/loginpage"
describe('example', () => {
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action')
    })
    it('TC-01', () => {
        cy.get('[name="username"]').type('j2ee');
        // cy.get('[name="password"]').type('j2ee');
        cy.get('[name="signon"]').click();
        cy.url().should("include", "/Catalog.action");
        cy.go('back');


    })

    it('TC-02', () => {
        cy.get('[name="username"]').type('incorrectUser');
        // cy.wait(3000)
        cy.get('[name="signon"]').click();
        cy.get('#Catalog > form > :nth-child(1)').should('have.text', 'Please enter your username and password.')

    })

    it.only('TC-03', () => {
        cy.get('[name="username"]').type('j2ee');
        // cy.get('[name="password"]').type('j2ee');
        cy.get('[name="signon"]').click();
        cy.url().should("include", "/Catalog.action");
        cy.get('[href="/actions/Account.action?editAccountForm="]').click();
        cy.get(':nth-child(1) > :nth-child(2) > input').clear();
        cy.get(':nth-child(1) > :nth-child(2) > input').type('potiwat');
        cy.get('[name="editAccount"]').click();
        cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input').clear();
        cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input').type('potiwat@hello.com');
        cy.get('[name="editAccount"]').click();

    })

    it('TC-04 กดadd', () => {
        cy.get('[name="username"]').type('j2ee');
        // cy.get('[name="password"]').type('j2ee');
        cy.get('[name="signon"]').click();
        // loginpage.verifyLoginSucessText()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > :nth-child(1) > a').click();
        cy.get('.Button').click();
        cy.get(':nth-child(5) > input').clear().type('2');
        cy.get('[colspan="7"] > input').click();
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click();
        cy.get(':nth-child(3) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > :nth-child(5) > .Button').click();
        cy.get('[href="/actions/Order.action?newOrderForm="]').click();

        cy.get('select').select('MasterCard')
        cy.get('[name="newOrder"]').click();
        cy.get('.Button').click();
        // cy.get('#BackLink').click();
    })

    it('TC-05 remove', () => {
        cy.get('[name="username"]').type('j2ee');
        // cy.get('[name="password"]').type('j2ee');
        cy.get('[name="signon"]').click();
        // loginpage.verifyLoginSucessText()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click();
        cy.get(':nth-child(3) > :nth-child(1) > a').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get('.Button').click();
        cy.get(':nth-child(5) > input').clear().type('2');
        cy.get('[colspan="7"] > input').click();
        cy.get(':nth-child(8) > .Button').click();
        cy.screenshot('screenshotweb2/ภาพการ remove');
        cy.get('#BackLink > a').click();
    })


    it('TC-06 ย้อนกลับ', () => {
        cy.get('[name="username"]').type('j2ee');
        // cy.get('[name="password"]').type('j2ee');
        cy.get('[name="signon"]').click();
        // loginpage.verifyLoginSucessText()
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img').click();
        cy.get(':nth-child(5) > :nth-child(1) > a').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.screenshot('screenshotweb2/ภาพการย้อนกลับ/ก่อน');
        cy.get('#BackLink > a').click();
        cy.screenshot('screenshotweb2/ภาพการย้อนกลับ/หลัง');
        cy.get('#BackLink > a').click();
        cy.get(':nth-child(6) > :nth-child(1) > a').click();
        cy.get('#LogoContent > a > img').click(); //กลับไปหน้าแรก
    })
})