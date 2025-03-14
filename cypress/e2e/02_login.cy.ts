// This test file contains all the test cases for  Login functionality of the website

import LoginPage from "../pages/LoginPage";

describe("To test the Login Functionality", () => {
  it("UC08_User should be able to login with valid credentials", () => {
    LoginPage.visit();
    LoginPage.fillCredentials(`registeredUser`);  // Use a valid email from signup
    LoginPage.submit();

    LoginPage.verifySuccessfulLogin();
  });

  it("UC09_User should not be able to log in with incorrect password", () => {
    LoginPage.visit();
    LoginPage.fillCredentials("wrongUser");
    LoginPage.submit();

    cy.contains("The account sign-in was incorrect").should("be.visible");
  });

  it("UC10_User should not log in with unregistered email", () => {
    LoginPage.visit();
    LoginPage.fillCredentials("unregisteredUser"); // Unregistered email
    LoginPage.submit();

    cy.contains("The account sign-in was incorrect").should("be.visible");
  });

  it("Should not log in with empty fields", () => {
    LoginPage.visit();
    LoginPage.submit();

    cy.contains("This is a required field").should("be.visible").then((element) => {
    if (!element) {
      cy.contains("A login and a password are required.").should("be.visible");
    }
  });


  });

});
