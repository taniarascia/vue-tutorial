/// <reference types="cypress" />
const faker = require('faker');

context('basic interactions scenarios', () => {
    const employeeName = faker.name.findName()
    const employeeEmail = faker.internet.email()

    beforeEach(() => {

    })

    it('type keys', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#employee-name-txt').type(employeeName)
        cy.get('#employee-email-txt').type(employeeEmail)
    })

    it('click', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#employee-name-txt').type(employeeName)
        cy.get('#employee-email-txt').type(employeeEmail)
        cy.get('#add-employee-btn').click()
        cy.contains('Employee successfully added')
    })

    it('stub response', () => {
        let mockUser = [
            {
                "id": 1,
                "name": "Stevie Ray",
                "username": "Stevie",
                "email": "stevie.ray@blues.com"
            },
            {
                "id": 1,
                "name": "Eric Clapton",
                "username": "Eric",
                "email": "eric.clapton@blues.com"
            }
        ]

        cy.server()
        cy.route({
            method: 'GET',
            url: '/users',
            response: mockUser
        })
        cy.visit('http://localhost:8080/')
    })
})
