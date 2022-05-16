import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { GoogleHomePage } from "../page_objects/google_home_page";
import { GoogleResultsPage } from "../page_objects/google_results_page";

const homePage = new GoogleHomePage();
const resultsPage = new GoogleResultsPage();

Given("I navigate to Google", () => {
  homePage.navigate();
  homePage.googleCookieAgreeButton.click();
});

When('I search for {string}', (searchString) => {
  homePage.searchBar.type(`${searchString}{enter}`);
});

Then('I expect to see the top {int} of results contain the word {string}', (numberOfResults, searchString) => {
  resultsPage.getResultHyperlinks().each((element, index) => {
    if (index < numberOfResults) {
      assert(element.get(0).innerText.toLowerCase().includes(searchString.toLowerCase()));
    }
  })
});