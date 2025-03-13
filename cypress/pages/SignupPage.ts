// This test file contains the POM for  SignUp functionality of the website
class SignupPage {
    visit() {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
    }
  
    fillFirstName(firstName: string) {
      cy.get("#firstname").type(firstName);
    }
  
    fillLastName(lastName: string) {
      cy.get("#lastname").type(lastName);
    }
  
    fillEmail(email: string) {
      cy.get("#email_address").type(email);
    }
  
    fillPassword(password: string) {
      cy.get("#password").type(password);
      cy.get("#password-confirmation").type(password);
    }
  
    submit() {
      cy.get("button[title='Create an Account']").click();
    }
  }
  
  export default new SignupPage();
  