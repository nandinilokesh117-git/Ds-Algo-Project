export class RegisterPage {

  constructor(page) {
    this.page = page;
    this.pwdConfirmTextBox = page.locator('input[name="password2"]');
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.userNameTextBox = page.locator('input[name="username"]'); //page.getByRole('textbox', { name: 'username' });
    this.pwdTextBox = page.locator('input[name="password1"]');
    

    this.pwdMismatchError = page.getByText('password_mismatch:The two')
  }
async generateValidUsername(length = 10) {
  // Make sure length doesn't exceed 150
  if (length > 150) length = 150;

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.+-_';
  let username = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    username += chars[randomIndex];
  }

  return username;

}
  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async getUsernameErrorMessage() {
    const x = await this.userNameTextBox.evaluate(el => el.validationMessage);
    console.log(x);
    return x;
  }

  async getPasswordErrorMessage() {
    return await this.pwdTextBox.evaluate(el => el.validationMessage);
  }

  async getPasswordConfirmErrorMessage() {
    return await this.pwdConfirmTextBox.evaluate(el => el.validationMessage);
  }
  async fillUsername(username) {
    await this.userNameTextBox.fill(username);
  }

  async fillPasswordFields(pwd, pwd_confirm){
    await this.pwdTextBox.fill(pwd);
    await this.pwdConfirmTextBox.fill(pwd_confirm);
  }

  async fillPassword(password) {
    await this.pwdTextBox.fill(password);
  
  }
  async fillConfirmPassword(confirm_password) {
    await this.pwdConfirmTextBox.fill(confirm_password);
  }


  
}