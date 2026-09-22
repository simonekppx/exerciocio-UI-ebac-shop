/// <reference types="cypress" />

context('Funcionalidade Logout', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Logout apos login com sucesso usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout a').click()
        cy.get('#username').should('be.visible')
    })
})
