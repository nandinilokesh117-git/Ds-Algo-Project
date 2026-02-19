import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameField = page.getByRole('textbox', { name: 'Username:' });
    this.passwordField = page.getByRole('textbox', { name: 'Password:' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
  }

  async navigateToSignIn() {
    await this.signInLink.click();
  }

  async fillUsername(username) {
    await this.usernameField.fill(username);
  }

  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async clearUsername() {
    await this.usernameField.fill('');
  }

  async clearPassword() {
    await this.passwordField.fill('');
  }

  async fillCredentials(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }

  async submitLogin(username, password) {
    await this.fillCredentials(username, password);
    await this.clickLogin();
  }

  async verifyFieldValidation(field, expectedMessage) {
    await field.focus();
    const msg = await field.evaluate(el => {
      el.reportValidity();
      return el.validationMessage;
    });
    const received = (msg || '').toString();
    const expected = (expectedMessage || '').toString();

    // Normalize and tolerate browser differences for the "fill out this field" message
    const receivedNorm = received.toLowerCase().replace(/[^a-z\s]/g, '').trim();
    const expectedNorm = expected.toLowerCase().replace(/[^a-z\s]/g, '').trim();

    if (expectedNorm.includes('fill out this field')) {
      expect(receivedNorm).toContain('fill out this field');
    } else {
      expect(received).toBe(expected);
    }
  }

  async verifyUsernameValidation(expectedMessage) {
    await this.verifyFieldValidation(this.usernameField, expectedMessage);
  }

  async verifyPasswordValidation(expectedMessage) {
    await this.verifyFieldValidation(this.passwordField, expectedMessage);
  }

  async verifyErrorMessage(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async verifySuccessMessage(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async isLoginButtonVisible() {
    return await this.loginBtn.isVisible();
  }

  async isUsernameFieldVisible() {
    return await this.usernameField.isVisible();
  }

  async isPasswordFieldVisible() {
    return await this.passwordField.isVisible();
  }
}
