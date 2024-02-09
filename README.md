#### Goals
Main goal of this repo is showed my hard skills in automation testing field. 

#### Website:
The website which I automated is: https://www.gov.pl/<br>

#### Tools:
1. [TypeScript](https://www.typescriptlang.org/) <br>
2. [Playwright](https://playwright.dev) <br>

#### Target User Scenario: 

1. User should search for a phrase and get relevant results: the list of results should include the query in the title.
   
2. User should be able to filter search results: period of time, ministry unit - example: 'kwartł', 'Cyfrowa Piaskownica Administracji'.
   
3. User can expand and access selected tabs from side manu or main page: 'Dla obywatela', 'Dla Przedsiębiorcy', 'Dla Urzędnika', 'Dla Rolnika'.
   
4. User should be able to check special information and the routes to it should be correct - example: 'Odwołaj się od mandatu drogowego'

#### Command to run:
1. Open the console or terminal on your local machine.
   
2. Clone this repository to your local machine using console:
```sh
git clone https://github.com/maciejleoniak/gov_playwright_testing.git
```
3. Go to the repository directory:
```sh
cd gov_playwright_testing
```
4. Install the server dependencies using the following command:
 ```sh
npm install
```
5. Run the test by Playwright:
```sh
npx playwright test
```