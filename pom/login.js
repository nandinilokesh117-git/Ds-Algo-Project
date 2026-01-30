export class Login {


  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
  }

  async launchApp() {
    await this.page.goto('https://dsportalapp.herokuapp.com/home');
  }

//   async loginStandard() {
//     await this.username.fill('standard_user')
//     await this.password.fill('secret_sauce')
//     await this.loginBtn.click()
//   }

//   async loginError() {
//     await this.username.fill('locked_out_user')
//     await this.password.fill('secret_sauce')
//     await this.loginBtn.click()
//   }
// 
}