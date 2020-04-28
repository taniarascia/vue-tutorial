/// <reference types="cypress" />

context('Browser Navigation', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
        cy.get('.navbar-nav').contains('Commands').click()
        cy.get('.dropdown-menu').contains('Navigation').click()
    })

    it('go back and forward', () => {
        cy.location('pathname').should('include', 'navigation')

        cy.go('back')
        cy.location('pathname').should('not.include', 'navigation')

        cy.go('forward')
        cy.location('pathname').should('include', 'navigation')
    })

    it('go back n times', () => {
        cy.xpath("//a[text()='cy.go()']").click()
        cy.go(-1)
        cy.location('pathname').should('include', 'navigation')
    })

})
