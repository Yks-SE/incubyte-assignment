const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const browserify = require("@cypress/browserify-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.{feature,cy.js}",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
    baseUrl: "https://magento.softwaretestingboard.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    stepDefinitions: [
      "cypress/support/step_definitions/**/*.js",
      "cypress/e2e/step_definitions/**/*.js"
    ]
  },
});