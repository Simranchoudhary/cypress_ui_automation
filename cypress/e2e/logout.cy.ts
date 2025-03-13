import LogoutPage from "../pages/LogoutPage";
import LoginPage from "../pages/LoginPage";

describe("Logout Test", () => {
  it("Should log out successfully", () => {
    LoginPage.visit();
    LoginPage.fillCredentials("registeredUser");
    LoginPage.submit();
    LogoutPage.clickLogout(); // Clicks the Sign Out link
    LogoutPage.confirmLogout(); // Confirms logout success
  });
});
