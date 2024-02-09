import { Page } from "@playwright/test";

export class GovMainPage {
  page: Page;

  readonly host = 'https://www.gov.pl/'
  readonly coockiesPolicySelector = '#cookies-info button'

  constructor(page: Page) {
    this.page = page;

  }

  async visit() {
    console.log("Visiting '%s'", this.host)
    await this.page.goto(this.host);
  }

  async cookiesPolicyAccept() {
    await this.page.locator(this.coockiesPolicySelector).click; 
  }

}

