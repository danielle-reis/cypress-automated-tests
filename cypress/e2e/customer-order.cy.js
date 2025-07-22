///<reference types= 'cypress'/>
describe('Ordens', () => {
    //Cenário 1
    it('Clicar na Ordens 1', () => { 
        cy.visit('https://automationpratice.com.br/my-account/customer-order')
        cy.wait(500)
        cy.get(':nth-child(2) > .active').click()
        cy.wait(500)
        cy.get(':nth-child(1) > :nth-child(5) > .view').click()
        cy.wait(500)
        cy.get('.theme-btn-one').click()
        cy.wait(500)
    })

    //Cenário 2
    it('Clicar na Ordens 2', () => { 
        //Oedem 1
        cy.visit('https://automationpratice.com.br/my-account/customer-order')
        cy.wait(500)
        cy.get(':nth-child(2) > .active').click()
        cy.wait(500)
        cy.get(':nth-child(2) > :nth-child(5) > .view').click()
        cy.wait(500)

        //Ordem 2
        cy.get('#order_ID').type('02', {delay: 200})
        cy.get('#billing_email').type('daniellepalheta@gmail.com', {delay: 200})
        cy.get('.order_track_button > .theme-btn-one').click()
        cy.wait(500)
        cy.get('h2').should('have.text', 'Your order is completed!')
        cy.get('.text-center > .theme-btn-one').click()
        
    })
})