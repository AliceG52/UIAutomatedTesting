import { GoogleHomePage } from "./google_home_page";

export class GoogleResultsPage extends GoogleHomePage {

    getResultHyperlinks() {
        return cy.get('#search').find('h3.LC20lb');
    }
}