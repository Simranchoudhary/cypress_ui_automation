// This test file contains all the test cases for  Logout functionality of the website

import LogoutPage from "../pages/LogoutPage";
import LoginPage from "../pages/LoginPage";

describe("To test the Logout functionality", () => {
  it("UC12_User should log out successfully", () => {
    LoginPage.visit();
    LoginPage.fillCredentials("registeredUser");
    LoginPage.submit();
    LogoutPage.clickLogout(); // Clicks the Sign Out link
    LogoutPage.confirmLogout(); // Confirms logout success
  });
});
