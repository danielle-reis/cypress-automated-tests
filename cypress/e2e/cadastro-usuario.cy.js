
/// <reference types="cypress"/> 
describe('Cadastro', () => {

        //Cenário 1
    it('Cadastro com sucesso', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/register')
        //Preencher nome
        cy.get('#user').type('Danielle Reis')
        //Preencher email válido
         cy.get('#email').type('daniellepalheta@hotmail.com')
        //preencher senha valida
         cy.get('#password').type('HPL100hy')
         //click
         cy.get('#btnRegister').click()
         cy.get('#swal2-title').should('have.text', 'Cadastro realizado!') 
    })
        // Cenário 2
    it('Nome inválido', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/register')
        //Preencher nome
        cy.get('#user')
        //Preencher email válido
         cy.get('#email').type('daniellepalheta@hotmail.com')
        //preencher senha valida
         cy.get('#password').type('HPL100hy')
         //click
         cy.get('#btnRegister').click()
         cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido') 
    })

        //Cenário 3
    it('Email Inválido', () => {
        //Acessar a tela de loggin
        cy.visit('https://automationpratice.com.br/register')
        //Preencher nome
        cy.get('#user').type('Danielle Reis')
        //Preencher email válido
        cy.get('#email').type('daniellepalheta.com')
        //preencher senha valida
        cy.get('#password').type('HPL100hy')
         //click
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente') 
    })

    it('Senha Inválida', () => {
        cy.visit('https://automationpratice.com.br/register')
        //Peencher nome
        cy.get('#user').type('Danielle Reis')
        //Preencher email válido
        cy.get('#email').type('daniellepalheta@gmail.com')
        //preencher senha valida
        cy.get('#password').type('hjklu')
         //click
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })
})