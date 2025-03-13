import SignupPage from "../pages/SignupPage";

describe("To test the Sign Up functionality", () => {
  it("Should create a new user account", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("Simran");
    SignupPage.fillLastName("Choudhary");
    SignupPage.fillEmail(`test${Date.now()}@example.com`);
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("Thank you for registering").should("be.visible");
  });

  it("Should not sign up with an existing email", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("Simran");
    SignupPage.fillLastName("Choudhary");
    SignupPage.fillEmail("simranchoudhary1319@gmail.com"); // Already registered email
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("There is already an account with this email").should("be.visible");
  });

  it("Should not sign up with mismatched password confirmation", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail(`test${Date.now()}@example.com`);
    cy.get("#password").type("Test@1234");
    cy.get("#password-confirmation").type("DifferentPassword"); // Mismatch
    SignupPage.submit();

    cy.contains("Please enter the same value again.").should("be.visible");
  });

  it("Should not sign up with invalid email format", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail("invalid-email"); // Invalid format
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("Please enter a valid email address").should("be.visible");
  });
  
  it("Should not sign up with an existing email", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail("test@example.com"); // Already registered email
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("There is already an account with this email").should("be.visible");
  });

  it("Should not sign up with invalid email format", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail("invalid-email"); // Invalid format
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("Please enter a valid email address").should("be.visible");
  });
});
