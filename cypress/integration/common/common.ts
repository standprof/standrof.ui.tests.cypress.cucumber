import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given('I navigate to the Standprof web site', () => {
  cy.visit('/')
})

