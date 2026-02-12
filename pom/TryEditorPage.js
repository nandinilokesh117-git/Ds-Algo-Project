import { expect } from '@playwright/test';

export class TryEditorPage {
  constructor(page) {
    this.page = page;
    this.editor = page.getByRole('textbox');
    this.runBtn = page.getByRole('button', { name: 'Run' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.output = page.locator('#output');
  }

  async fillCode(code) {
    await this.editor.focus();
    await this.editor.press('Control+A');
    await this.editor.fill(code);
  }

  async clickRun() {
    await this.runBtn.click();
  }

  async clickSubmit() {
    await this.submitBtn.click();
  }

  async runCode(code) {
    await this.fillCode(code);
    await this.clickRun();
  }

  async submitCode(code) {
    await this.fillCode(code);
    await this.clickSubmit();
  }

  async expectOutput(expected) {
    await expect(this.output).toContainText(expected);
  }

  async expectMultipleOutputs(outputs) {
    for (const output of outputs) {
      await expect(this.output).toContainText(output.trim());
    }
  }

  async handleErrorDialog(expectedMessage) {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain(expectedMessage);
      await dialog.accept();
    });
  }

  async expectSuccessMessage(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async expectErrorMessage(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async isRunButtonVisible() {
    return await this.runBtn.isVisible();
  }

  async isSubmitButtonVisible() {
    return await this.submitBtn.isVisible();
  }
}