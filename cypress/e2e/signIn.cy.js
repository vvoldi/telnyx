/// <reference types="cypress" />
import SignInUserProfiles from "../fixtures/SignInUserProfiles.json";

describe("Signing in with any variants", () => {
    beforeEach(() => {
        cy.visit("https://portal.telnyx.com/#/email/sign-in");

        cy.CoookiesChecker();
    });

    it("Sign in with valid credentials", () => {
        cy.SignIn(SignInUserProfiles.User);
    });
    it("Sign in with invalid email and password", () => {
        cy.SignIn(SignInUserProfiles.invalidUser);
    });
    it("Sign In without email ", () => {
        cy.SignIn(SignInUserProfiles.emptyEmailUser);
    });
    it("Sign in with empty password", () => {
        cy.SignIn(SignInUserProfiles.emptyPassUser);
    });
    it("Sign in with empty email and password", () => {
        cy.SignIn(SignInUserProfiles.emptyUser);
    });
});
