# Cypress Test env 


This project demonstrates an example of using the [Cypress framework](https://www.cypress.io/) on the site [telenyx.com](https://telnyx.com/).


## How to run:

-   clone this repo
-   install dependencies: `npm install`
-   run tests: `npm run cy:run`
-   clear previous output `npm run allure:clear`
-   generate allure report: `npm run allure:report`
-   open report: `allure open`

## Allure report

-   is generated by github action on every push. See [.github/workflows/publish.yaml](.github/workflows/publish.yaml)
-   hosted with github pages. Check [allure-report](https://vvoldi.github.io/telnyx/)

