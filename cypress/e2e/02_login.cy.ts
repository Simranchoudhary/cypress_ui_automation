import LoginPage from "../pages/LoginPage";

describe("Login Test", () => {
  it("Should login with valid credentials", () => {
    LoginPage.visit();
    LoginPage.fillCredentials(`registeredUser`);  // Use a valid email from signup
    LoginPage.submit();

    LoginPage.verifySuccessfulLogin();
  });

  it("Should not log in with incorrect password", () => {
    LoginPage.visit();
    LoginPage.fillCredentials("wrongUser");
    LoginPage.submit();

    cy.contains("The account sign-in was incorrect").should("be.visible");
  });

  it("Should not log in with unregistered email", () => {
    LoginPage.visit();
    LoginPage.fillCredentials("unregisteredUser"); // Unregistered email
    LoginPage.submit();

    cy.contains("The account sign-in was incorrect").should("be.visible");
  });

  it("Should not log in with empty fields", () => {
    LoginPage.visit();
    LoginPage.submit();

    cy.contains("A login and a password are required").should("be.visible");
  });

});
