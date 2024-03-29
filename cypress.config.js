const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qtzffo',
  e2e: {
    setupNodeEvents(on, config) {
      
      
    },
    specPattern: "cypress/integration/Test_Sites/*.js",
    pageLoadTimeout: 30000,
    includeShadowDom: true,
    defaultCommandTimeout: 60000,
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    retries: {
      runMode: 2, 
      openMode: 0, 
    },
    video: true, 
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    }, 

    
    viewportWidth: 1280,
    viewportHeight: 720,

   

    
    chromeWebSecurity: false,

  
    
    
    
    
  },
  
});



