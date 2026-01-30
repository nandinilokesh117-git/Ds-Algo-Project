// pages/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://dsportalapp.herokuapp.com/';
    // Define common locators here
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // Add other methods for page interactions
}
module.exports = { HomePage };