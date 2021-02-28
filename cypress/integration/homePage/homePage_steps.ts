import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pages/homePage'

const homePage = new HomePage();

Then('the Home page should show the {string} section', (text) => {
    homePage.getSectionTitle().should('contain', text)
})