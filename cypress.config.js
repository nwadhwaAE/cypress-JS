const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "", // Set the base URL for your application
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    TESTENV: "env1",
  },
  ...loadConfigFile(), // Load environment-specific configuration
});

function loadConfigFile() {
  const testEnv = process.env.TESTENV || "env1";
  const configPath = `./config/${testEnv}.json`;
  try {
    return require(configPath);
  } catch (error) {
    console.error(`Config Failed to load configuration file ${configPath}`);
    process.exit(1);
  }
}