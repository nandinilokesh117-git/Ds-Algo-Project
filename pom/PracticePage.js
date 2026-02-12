import { expect } from '@playwright/test';

export class PracticePage {
  constructor(page) {
    this.page = page;
  }

  async openQuestion(questionName) {
    await this.page.getByRole('link', { name: questionName }).click();
  }

  async verifyPracticePageURL() {
    await expect(this.page).toHaveURL(/.*practice/);
  }

  async goBack() {
    await this.page.goBack();
  }
}