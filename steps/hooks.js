// hooks.js
import { createBdd } from 'playwright-bdd';
import * as allure from 'allure-playwright';

const { Before, After, AfterStep } = createBdd();

// ============================
// Before each scenario
// ============================
Before(async ({}, scenario) => {
  // Add Allure metadata for scenario
  await allure.epic('Playwright BDD Tests');
  await allure.feature(scenario?.pickle?.name || 'Unnamed Scenario');
});

// ============================
// After each step
// ============================
AfterStep(async ({ page, step }) => {
  if (!step) return; // Safety check

  // Only capture screenshot if step failed
  if ((step.result?.status === 'FAILED' || step.status === 'FAILED') && page) {
    try {
      const screenshot = await page.screenshot({ fullPage: true });
      await allure.attachment(
        `Failed Step: ${step.name || step.text}`,
        screenshot,
        'image/png'
      );
    } catch (err) {
      console.error('Failed to capture screenshot for step:', step?.name || step?.text, err);
    }
  }
});

// ============================
// After each scenario
// ============================
After(async ({ page, scenario }) => {
  if (!scenario) return; // Safety check

  // Capture screenshot if scenario failed
  if ((scenario.result?.status === 'FAILED' || scenario.status === 'FAILED') && page) {
    try {
      const screenshot = await page.screenshot({ fullPage: true });
      await allure.attachment(
        'Scenario Failure Screenshot',
        screenshot,
        'image/png'
      );
    } catch (err) {
      console.error(
        'Failed to capture screenshot for scenario:',
        scenario?.pickle?.name,
        err
      );
    }
  }
});
