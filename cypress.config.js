const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // implement node event listeners here
      const environmentValue = process.env.NODE_ENV || config.env.environmentName || 'qa';

      const environmentFilename = `./cypress/fixtures/config/${environmentValue}.settings.json`;
      const settings = require(environmentFilename);

      //Check if the baseUrl property exists in the configuration file.
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      //Check if there is an env property in the configuration file and replace the variables.
      if (settings.env) {
        config.env = {
          environmentName: environmentValue,
          ...config.env,
          ...settings.env,
        };
      }
      return config;

    },
    "viewportWidth": 1920,
  "viewportHeight": 1080,
  "defaultCommandTimeout": 20000 ,
  },
});
