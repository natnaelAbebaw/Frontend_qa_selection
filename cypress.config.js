import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin.js";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, {
        customDiffConfig: { threshold: 0.5 },
        failureThreshold: 0.05,
        failureThresholdType: "percent",
      });
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
  },
});
