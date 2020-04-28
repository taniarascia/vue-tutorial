/// <reference types="cypress" />
context('stub responses', () => {

    beforeEach(() => {

    })

    it.only('stub a comment object', () => {
        let message = 'the fox jumped over the lazzy dog'
        let commentObject = {
            "postId": 1,
            "id": 1,
            "name": 'Stubbed comment',
            "email": 'user@mock.io',
            "body": message
        }
        cy.server()
        cy.route({
            method: 'GET',      // Route all GET requests
            url: '/comments/1',    // that have a URL that matches '/users/*'
            response: commentObject      // and force the response to be: []
        })
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.get('.network-comment').should(($comment) => {
            expect($comment).to.contain(message)
        })
    })
})
