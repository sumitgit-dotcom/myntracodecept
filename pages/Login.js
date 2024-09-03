
export class Login {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://www.myntra.com/');
    }
  
    async clickProfile() {
      await this.page.getByText('Profile').click();
    }
  
    async clickLoginSignUp() {
      await this.page.getByText('log in / sign up').click();
    }
  
    async fillMobileNumber(mobileNumber) {
      await this.page.getByPlaceholder('Mobile Number').fill(mobileNumber);
    }
  
    async clickContinue() {
      await this.page.getByText('CONTINUE').click();
    }
  
    async enterOTP(otp) {
      await this.page.getByPlaceholder('Enter OTP').fill(otp);
    }
  
    async clickSubmit() {
      await this.page.getByText('SUBMIT').click();
    }
  }
  