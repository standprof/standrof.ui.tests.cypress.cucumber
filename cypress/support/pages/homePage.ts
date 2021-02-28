import OurServicesPage from "./ourServicesPage";

class HomePage {

    visit() {
        cy.visit('/')
    }
    
    getSectionTitle() {
        return cy.get('h2')
    }
}
export default HomePage