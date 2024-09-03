
import { test, expect } from '@playwright/test';
import { Login } from '../../pages/Login';

test('Myntra Login Test', async ({ page }) => {  
  const loginpage = new Login(page);
  
  
  await loginpage.goto();

 
  await loginpage.clickProfile();
  await loginpage.clickLoginSignUp();
  
 
  await loginpage.fillMobileNumber('your-mobile-number'); 
  
 
  await loginpage.clickContinue();

  
  await loginpage.enterOTP('123456'); 
  

  await loginpage.clickSubmit();
  
 
  await expect(page.getByText('Logout')).toBeVisible();
});
