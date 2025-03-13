// This test file contains the POM for  Forget Password functionality of the website
class ForgotPasswordPage {
    visit() {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/forgotpassword/");
    }
  
    fillEmail(email: string) {
      cy.get("#email_address").type(email);
    }
  
    submit() {
        cy.get("button.action.submit.primary").click();

    }
  }
  
  export default new ForgotPasswordPage();