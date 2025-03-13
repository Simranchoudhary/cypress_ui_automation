class LogoutPage {
    visit() {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/");
    }
  
    clickLogout() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.contains("Sign Out").click();
    }
  
    confirmLogout() {
      cy.contains("Sign In").should("be.visible");
    }
  }
  
  export default new LogoutPage();