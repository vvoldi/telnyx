/// <reference types="cypress" />
import SignUpUserProfiles from "../fixtures/SignUpUserProfiles.json";

describe("Signing up with any variants", () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/sign-up");

        cy.CoookiesChecker();
    });

    it("Sign Up", () => {
        cy.SignUp(SignUpUserProfiles.User);
    });
    it("Sign up without email ", () => {
        cy.SignUp(SignUpUserProfiles.emptyEmailUser);
    });
    it("Sign Up without password", () => {
        cy.SignUp(SignUpUserProfiles.emptyPassUser);
    });
    it("Sign up without name", () => {
        cy.SignUp(SignUpUserProfiles.emptyNameUser);
    });
    it("Sign up without Terms checkbox setting", () => {
        cy.SignUp(SignUpUserProfiles.emptyTermsUser);
    });
});
