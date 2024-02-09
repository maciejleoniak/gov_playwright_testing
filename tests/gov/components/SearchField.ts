import { Page, expect } from '@playwright/test';
import * as data from '../fixtures/data.json';

export class SearchField {
  page: Page;

  readonly searchBarSelector = '#query';
  readonly searchBarButtonSelector = '.search-form button[type="submit"]';
  readonly AAA = '//*[@id="main-content"]/section/div[2]/div[1]'
  readonly searchResultsContainerSelector = '#main-content > section > div.search__content.js-loader-wrapper > div.search__result.search-results > div.search-results__list.result-list';


  constructor(page: Page) {
    this.page = page;
  }
  async searchBar() {
    await this.page.locator(this.searchBarSelector).fill(data.validQuery);
    await this.page.locator(this.searchBarButtonSelector).click();

  };

  async searchResultsVerification() {
    // const mytext = await this.page.locator('#main-content > section > div.search__content.js-loader-wrapper > div.search__result.search-results').textContent()
    

    const mytext = await this.page.locator('#main-content > section > div.search__counter').textContent();
    console.log(mytext);
    const liczba = parseInt(mytext);
    console.log(liczba);

  }

}

