const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      
      return config;
    },
    baseUrl: 'https://portaldatransparencia.gov.br',
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    
    // ==========================================
    // CONFIGURAÇÕES DE VÍDEO E GRAVAÇÃO
    // ==========================================
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    videoUploadOnPasses: true,
    
    // ==========================================
    // CONFIGURAÇÕES DE SCREENSHOTS
    // ==========================================
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    
    // ==========================================
    // CONFIGURAÇÕES DE VIEWPORT PARA QUALIDADE
    // ==========================================
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // ==========================================
    // TIMEOUTS PARA GRAVAÇÃO MAIS ESTÁVEL
    // ==========================================
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // ==========================================
    // CONFIGURAÇÕES ADICIONAIS DE PERFORMANCE
    // ==========================================
    pageLoadTimeout: 30000,
    experimentalStudio: true,
    retries: {
      runMode: 1,
      openMode: 0
    },
  },
  
  // ==========================================
  // CONFIGURAÇÕES GLOBAIS DO CYPRESS
  // ==========================================
  chromeWebSecurity: false,
  watchForFileChanges: false,
  numTestsKeptInMemory: 5,
});