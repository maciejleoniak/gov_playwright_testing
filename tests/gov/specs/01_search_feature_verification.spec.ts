import { test, expect } from '@playwright/test';
import { GovMainPage } from '../pages/GovMainPage';
import { SearchField } from '../components/SearchField';


test.beforeEach(async ({ page }) => {
    const mainPage = new GovMainPage(page);
    await mainPage.visit();
    await mainPage.cookiesPolicyAccept();
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test.describe('User should search for a phrase and get relevant results', () => {
    test('the list of results should include the query in the title', async ({ page }) => {
        const searchField = new SearchField(page);
        await searchField.searchBar();
        await page.waitForTimeout(3000);
        await searchField.searchResultsVerification();
    

    });
});
