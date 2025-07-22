
/// <reference types="cypress"/> 
describe('Login',() => {

        //Cenário 1
    it('Login com sucesso', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/login')
        //Preencher email válido
         cy.get('#user').type('daniellepalheta@gmail.com')
        //preencher senha valida
         cy.get('#password').type('HPL100hy')
         //click
         cy.get('#btnLogin').click()
         cy.get('#swal2-title').should('have.text', 'Login realizado') 
    })

        //Cenário 2
    it('Email inválido', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/login')
        //Preencher email válido
         cy.get('#user').type('daniellepalhe', {delay: 300})
        //preencher senha valida
         cy.get('#password').type('HPL100hy', {delay: 300})
         //click
         cy.get('#btnLogin').click()
        
         cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

        //Cenerio 3
    it('Senha inválida', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/login')
        //Preencher email válido
         cy.get('#user').type('daniellepalheta@gmail.com', {delay: 300})
        //preencher senha valida
         cy.get('#password').type('123', {delay: 300})
         //click
         cy.get('#btnLogin').click()
        
         cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })
        //Cenário 4
    it('Campos vazios', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/login')
        //Preencher email válido
         cy.get('#btnLogin').click()
         cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})