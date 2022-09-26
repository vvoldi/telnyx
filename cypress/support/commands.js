Cypress.Commands.add("CoookiesChecker", () => {
    const closeCookieBTN = 'button[aria-label="close and deny"]';

    cy.get("body").then((body) => {
        if (body.find(closeCookieBTN).length) {
            cy.get(closeCookieBTN).click();
        }
    });
});

Cypress.Commands.add("SignUp", (user) => {
    const emailInput = "#email";
    const nameInput = "#full_name";
    const passwordInput = "#password";
    const TermsAndConditionsCheckbox = "#terms_and_conditions";
    const submitBTN = 'form button[type="submit"]';

    switch (user.id) {
        case "emptyEmailUser":
            cy.get(nameInput).type(user.name);
            cy.get(passwordInput).type(user.pass);
            cy.get(TermsAndConditionsCheckbox).click({ force: true });
            cy.get(submitBTN).click();
            break;
        case "emptyPassUser":
            cy.get(emailInput).type(user.email);
            cy.get(nameInput).type(user.name);
            cy.get(TermsAndConditionsCheckbox).click({ force: true });
            cy.get(submitBTN).click();
            break;
        case "emptyNameUser":
            cy.get(emailInput).type(user.email);
            cy.get(passwordInput).type(user.pass);
            cy.get(TermsAndConditionsCheckbox).click({ force: true });
            cy.get(submitBTN).click();
            break;
        case "emptyTermsUser":
            cy.get(emailInput).type(user.email);
            cy.get(nameInput).type(user.name);
            cy.get(passwordInput).type(user.pass);
            cy.get(submitBTN).click();
            break;
        default:
            cy.get(emailInput).type(user.email);
            cy.get(nameInput).type(user.name);
            cy.get(passwordInput).type(user.pass);
            cy.get(TermsAndConditionsCheckbox).click({ force: true });
            cy.get(submitBTN).click();
            // cy.wait(10000)
            //     .url()
            //     .should("contain", "/verify-email")
            //     .get(".sc-81d2e95d-3 strong")
            //     .should("contain", user.email);
            break;
    }
});

Cypress.Commands.add("SignIn", (user) => {
    const emailInput = "form[aria-label='loginForm'] input[name='email']";
    const passwordInput = "input[name='password']";
    const submitBTN = "button[class*='LoginForm__LoginButton']";
    const hoverOnUserLogo = "div.tx-ZLaFj1";
    const getUserValue = "[class=text-truncate]";

    switch (user.id) {
        case "emptyEmailUser":
            cy.get(passwordInput).type(user.pass);
            cy.get(submitBTN).click();
            break;
        case "invalidUser":
            cy.get(emailInput).type(user.email);
            cy.get(passwordInput).type(user.pass);
            cy.get(submitBTN).click();
            break;
        case "emptyEmailUser":
            cy.get(passwordInput).type(user.pass);
            cy.get(submitBTN).click();
            break;
        case "emptyPassUser":
            cy.get(emailInput).type(user.email);
            cy.get(submitBTN).click();
            break;
        case "emptyUser":
            cy.get(submitBTN).click();
            break;
        default:
            cy.get(emailInput).type(user.email);
            cy.get(passwordInput).type(user.pass);
            cy.get(submitBTN).click();
            cy.wait(7000)
                .url()
                .should("contain", "#/app")
                .get(hoverOnUserLogo)
                .trigger("mouseover")
                .get(getUserValue)
                .should("contain", user.email);
            break;
    }
});
