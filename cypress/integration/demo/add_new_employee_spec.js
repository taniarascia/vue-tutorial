/// <reference types="cypress" />
import { v4 as uuidv4 } from 'uuid';
const faker = require('faker');

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Add a new employee 1', () => {
        let employee_name = faker.name.findName();
        let employee_email = faker.internet.email()
        let success_message = "Employee successfully added"
        cy.get('#employee-name-txt').type(employee_name);
        cy.get('#employee-email-txt').type(employee_email)
        cy.get('#add-employee-btn').click()
        cy.contains(success_message)
        //cy.get('tr').eq(-1).find('td').eq(0).should('contain', employee_name)
    })
})
