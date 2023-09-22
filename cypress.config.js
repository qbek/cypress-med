const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: "[name]-report",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
