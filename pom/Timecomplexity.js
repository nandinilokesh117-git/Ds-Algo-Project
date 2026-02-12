export class Timecomplexity{

    constructor(page) {

    this.tryHereButton = page.getByRole('link', { name: 'Try here>>>' });

    }

     async clickTryhereButton() {
    await this.tryHereButton.click();
  }
}