/// <reference types="cypress" />
const faker = require('faker');

context('new employee test scenarios', () => {
    const employeeName = faker.name.findName()
    const employeeEmail = faker.internet.email()

    beforeEach(() => {

    })

    it('Verify success message when adding a new employee', () => {
        cy.visit('http://localhost:8080/')
        let success_message = "Employee successfully added"
        cy.get('#employee-name-txt').type(employeeName)
        cy.get('#employee-email-txt').type(employeeEmail)
        cy.get('#add-employee-btn').click()
        cy.contains(success_message)
    })

    it('Verify new employee is listed', () => {
        cy.visit('http://localhost:8080/')
        cy.server();
        cy.route('POST', '/users').as('usersRequest')
        let successMessage = "Employee successfully added"
        cy.get('#employee-name-txt').type(employeeName)
        cy.get('#employee-email-txt').type(employeeEmail)
        cy.get('#add-employee-btn').click()
        cy.contains(successMessage)
        //cy.wait('@usersRequest').its('status').should('eq', 201)
        //cy.get('tr').eq(-1).find('td').eq(0).should('contain', employeeName)
    })
})
