const cypress = require("cypress");

const cypressConfig = {
    video: true,
    browser: "chrome",
    config: {
        specPattern: "cypress/e2e/**",
    },
    env: {
        allure: true,
        allureReuseAfterSpec: true,
    },
};

(async function () {
    await cypress.run(cypressConfig);
})();
