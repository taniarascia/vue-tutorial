/// <reference types="cypress" />
context('wait for XHR scenarios', () => {

    beforeEach(() => {

    })

    it('wait for a GET', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route('GET', 'comments/*').as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('status').should('eq', 200)
    })

    it('wait for a POST', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route('POST', '/comments').as('postComment')
        cy.get('.network-post').click()
        cy.wait('@postComment').should((xhr) => {
            expect(xhr.requestHeaders).to.have.property('Content-Type')
            expect(xhr.requestBody).to.include('email')
            expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
        })
    })
})
