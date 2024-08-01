const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  
    defaultCommandTimeout: 20000, // 20 segundos
    pageLoadTimeout: 60000, // 60 segundos
    requestTimeout: 5000, // 5 segundos
    responseTimeout: 30000,
    setupNodeEvents(on, config) {
  
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
    testIsolation: false, 
      "viewportWidth": 1366,
    "viewportHeight": 768,
  },
  video: true,
});
