// This test file contains all the test cases for  SignUp functionality of the website

import SignupPage from "../pages/SignupPage";

describe("To test the Sign Up functionality", () => {
  it("UC01_User should be able to create a new user account", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("Simran");
    SignupPage.fillLastName("Choudhary");
    SignupPage.fillEmail(`test${Date.now()}@example.com`);
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("Thank you for registering").should("be.visible");
  });

  it("UC02_User should not be able to sign up with an existing email", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("Simran");
    SignupPage.fillLastName("Choudhary");
    SignupPage.fillEmail("simranchoudhary1319@gmail.com"); // Already registered email
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("There is already an account with this email").should("be.visible");
  });

  it("UC03_User should not be able to sign up with mismatched password confirmation", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail(`test${Date.now()}@example.com`);
    cy.get("#password").type("Test@1234");
    cy.get("#password-confirmation").type("DifferentPassword"); // Mismatch
    SignupPage.submit();

    cy.contains("Please enter the same value again.").should("be.visible");
  });

  it("UC04_User should not be able to sign up with invalid email format", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail("invalid-email"); // Invalid format
    SignupPage.fillPassword("Test@1234");
    SignupPage.submit();

    cy.contains("Please enter a valid email address").should("be.visible");
  });

  it("UC05_User should see an error messages for required fields when submitting empty form", () => {
    SignupPage.visit();
    SignupPage.submit();

    cy.get("#firstname-error").should("be.visible").and("contain", "This is a required field.");
    cy.get("#lastname-error").should("be.visible").and("contain", "This is a required field.");
    cy.get("#email_address-error").should("be.visible").and("contain", "This is a required field.");
    cy.get("#password-error").should("be.visible").and("contain", "This is a required field.");
    cy.get("#password-confirmation-error").should("be.visible").and("contain", "This is a required field.");
  });

  it("UC06_User should see a password strength error message for weak passwords", () => {
    SignupPage.visit();
    SignupPage.fillFirstName("John");
    SignupPage.fillLastName("Doe");
    SignupPage.fillEmail(`test${Date.now()}@example.com`);
    SignupPage.fillPassword("12345"); // Weak password
    SignupPage.submit();

    cy.get("#password-error").should("be.visible")
      .and("contain", "Minimum length of this field must be equal or greater than 8 symbols.");
  });

  it("UC07_User Should see an error when special characters are entered in First Name and Last Name", () => {
    
    SignupPage.visit();
    SignupPage.fillFirstName("@John#");
    SignupPage.fillLastName("$Doe!");

    SignupPage.fillEmail(`test${Date.now()}@example.com`);
    SignupPage.fillPassword("Test@1234");
  
    SignupPage.submit();

    cy.contains("First Name is not valid! Last Name is not valid!").should("be.visible")
    
  });


})
