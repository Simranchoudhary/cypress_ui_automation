import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
    },
  },
});
