import { expect } from '@playwright/test';

export class ArrayPage {
  constructor(page) {
    this.page = page;
  }

  async openSection(sectionName) {
    await this.page.getByRole('link', { name: sectionName }).click();
  }

  async openTryEditor() {
    await this.page.getByRole('link', { name: /Try here/i }).click();
  }

  async openPracticeQuestions() {
    await this.page.getByRole('link', { name: 'Practice Questions' }).click();
  }

  async verifyPageURL(expectedPath) {
    await expect(this.page).toHaveURL(new RegExp(expectedPath));
  }

  async goBack() {
    await this.page.goBack();
  }
}