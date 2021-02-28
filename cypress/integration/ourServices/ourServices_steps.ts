import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import OurServicesPage from "../../support/pages/ourServicesPage";
import HomePage from "../../support/pages/homePage";

const ourServicesPage = new OurServicesPage();
const homePage = new HomePage();

Then('I should be able to open the Our Services page', () => {

    homePage.clickOurServices();

    ourServicesPage.getPageTitle()  
        .should('be.visible')
        .should('contain', 'OUR SERVICES')
    })
