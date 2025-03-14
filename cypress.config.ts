import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
        // Register event listeners here if needed
      },
    baseUrl: "https://magento.softwaretestingboard.com",
    video: true,
    screenshotsFolder: "cypress/screenshots", //in case of failure, the screenshot will be captured in this folder
    videosFolder: "cypress/videos",
    reporter: "mochawesome", // using mochawesome as the reporter
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
    },
  },
});
