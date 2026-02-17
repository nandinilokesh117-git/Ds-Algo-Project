class ArrayPage {
  constructor(page1) {
    this.page = page1;
    this.url = 'https://dsportalapp.herokuapp.com/array';
    // Define common locators here
  }

  async goto() {
    await this.page.goto(this.url);
  }

  // Add other methods for page interactions
}
module.exports = { ArrayPage };