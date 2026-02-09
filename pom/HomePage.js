import { expect } from '@playwright/test';
export class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.getStartedBtn = page.getByRole('button', { name: 'Get Started' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.dropdown = page.locator('.nav-link.dropdown-toggle');
    this.notLoggedInMsg = page.getByText('You are not logged in');
  }
    async navigate() {
    await this.page.goto('https://dsportalapp.herokuapp.com/');
  }
    async clickGetStarted() {
    await this.getStartedBtn.click();
  }
    async selectDSOption(option) {
    await this.dropdown.click();
    await this.page.getByRole('link', { name: option }).click();
  }
    async verifyNotLoggedInMessage() {
    await expect(this.notLoggedInMsg).toBeVisible();
  }
    async goBack() {
    await this.page.goBack();
  }

  async navigateToSection(hrefValue) {
    await this.page.locator(`a[href="${hrefValue}"]`).click();
  }

  async clickGetStartedForSection(sectionName) {
    await this.page.locator(`a[href="/${sectionName}"]`).click();
  }

  async verifyPageURL(expectedURL) {
    await expect(this.page).toHaveURL(new RegExp(expectedURL));
  }
    async verifyRegisterAndSignInLinks() {
    await expect(this.registerLink).toBeVisible();
    await expect(this.signInLink).toBeVisible();
  } 
}   
