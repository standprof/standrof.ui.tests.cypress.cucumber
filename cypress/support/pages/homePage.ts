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

    sendEmail(emailData: EmailData) {
        cy.get('[type = "text"]').first().type(emailData.name)
        cy.get('[type = "email"]').type(emailData.emailAddress)
        cy.get('[name = "Details"]').type(emailData.details)
        cy.get('.contact-form-submit-btn').click()
    }

    getThankYouMessage() {
        return cy.get('#contactFormResponseContainer')  
    }
}
export default HomePage