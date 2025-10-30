import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

switch (process.env.ENVIRONMENT) {
  case "dev":
    dotenv.config({ path: "./env/.env_dev", override: true });
    break;

  case "qa":
    dotenv.config({ path: "./env/.env_qa", override: true });
    break;

  default:
    dotenv.config({ path: "./env/.env_dev", override: true });
}

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  timeout: 100_00,
  retries: 0,
  expect: {
    timeout: 5_000,
  },

  reporter: [
    ["junit", { outputFile: "./test-results/Junit_Report.xml" }],
    ["line"],
    [
      "monocart-reporter",
      {
        name: "Insurance-Application-Automation_",
        outputFile: `./test-results/report_${Date.now()}.html`,
      },
    ],
  ],

  use: {
    browserName: "chromium",
    headless: false,
    ignoreHTTPSErrors: true,
    screenshot: "on",
    trace: "on",
  },

});
