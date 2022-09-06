const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.i6.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
