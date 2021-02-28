import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/homePage";

const homePage = new HomePage();

When('I send the email', (table) => {
    const emailData = table.hashes();
    
    homePage.sendEmail(emailData[0])
})

Then('I should see the {string}', (message) => {
    homePage.getThankYouMessage().should('contain', message)
})
