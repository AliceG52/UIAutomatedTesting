export class GoogleHomePage {
    
    navigate() {
        cy.visit(`https://www.google.com/`);
    }

    getGoogleCookies(){
        return cy.get('.J2ipb');
    }

    get googleCookieAgreeButton(){
       return this.getGoogleCookies().find('button').contains('I agree');
    }

    get searchBar(){
        return cy.get(`[title="Search"]`);
    }
} 