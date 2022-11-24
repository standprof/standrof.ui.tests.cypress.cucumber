import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pages/homePage'

const homePage = new HomePage();

Given('I open the Home page', () => {
  homePage.visit();
})

