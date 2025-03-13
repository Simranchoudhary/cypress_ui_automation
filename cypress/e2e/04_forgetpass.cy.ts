// This test file contains all the test cases for  Forget Password functionality of the website

import ForgotPasswordPage from "../pages/ForgetPassword";

describe("To test the Forgot Password functionality", () => {
  it("UC13_User should be able to send a password reset email for registered email", () => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.fillEmail("simranchoudhary1319@gmail.com"); // using a registered mail
    ForgotPasswordPage.submit();

    cy.contains("If there is an account associated with").should("be.visible");
  });

});
