import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

switch (process.env.ENVIRONMENT) {
  case "uat":
    dotenv.config({ path: "./env/.env_uat", override: true });
    break;

  case "qa":
    dotenv.config({ path: "./env/.env_qa", override: true });
    break;

  case "prepod":
    dotenv.config({ path: "./env/.env_prepod", override: true });
    break;

  default:
    dotenv.config({ path: "./env/.env_qa", override: true });
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
