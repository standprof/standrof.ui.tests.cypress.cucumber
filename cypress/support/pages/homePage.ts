import OurServicesPage from "./ourServicesPage";

class HomePage {

    visit() {
        cy.visit('/')
    }
    
    getSectionTitle() {
        return cy.get('h2')
    }

    clickOurServices()  {
        cy.get('a').contains('VIEW OUR SERVICES').click();
    }
}
export default HomePage