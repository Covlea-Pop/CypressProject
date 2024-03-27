const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: "cypress/integration/Test_Sites/*.js",
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 10000,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    retries: {
      runMode: 2, // Retry failed tests on CI twice
      openMode: 0, // Do not retry failed tests while interacting with the Test Runner
    },
    video: true, // Enable video recording
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'mochawesome', // Use 'mochawesome' for more detailed reporting

    // Customizing the test runner
    viewportWidth: 1280,
    viewportHeight: 720,

   

    // Security settings
    chromeWebSecurity: false, // Disable for certain cross-origin iframe issues, use with caution

    // Modify browser launch options
    
    
    
    
  },
  
});


