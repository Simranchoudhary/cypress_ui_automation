import ForgotPasswordPage from "../pages/ForgetPassword";

describe("Forgot Password Test", () => {
  it("Should send a password reset email for registered email", () => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.fillEmail("simranchoudhary1319@gmail.com"); // using a registered mail
    ForgotPasswordPage.submit();

    cy.contains("If there is an account associated with").should("be.visible");
  });

});
