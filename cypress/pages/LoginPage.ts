class LoginPage {
    visit() {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
    }
  
    fillCredentials(userType: string) {
        cy.fixture("users").then((users) => {
          cy.get("#email").type(users[userType].email);
          cy.get("#pass").type(users[userType].password);
        });
      }
    
    submit() {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    }
    
    verifySuccessfulLogin(){
        cy.get("h1.page-title span.base").should("have.text", "My Account");
    }
  }
  
  export default new LoginPage();
  