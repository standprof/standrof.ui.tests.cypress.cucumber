import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pages/homePage'

const homePage = new HomePage();

Given('I navigate to the Standprof web site', () => {
  homePage.visit();
})

