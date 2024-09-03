
export class checkout {
    constructor(page) {
      this.page = page;
    }
  
    async goto(productUrl) {
      await this.page.goto(productUrl);
    }
  
    async selectSize(size) {
      await this.page.getByText(size).click(); 
    }
  
    async clickAddToBag() {
      await this.page.getByRole('button', { name: 'ADD TO BAG' }).click();
    }
  
    async viewBag() {
      await this.page.getByRole('link', { name: 'Go to Bag' }).click();
    }
  
    async verifyProductInBag(productName) {
      await expect(this.page.getByText(productName)).toBeVisible();
    }
  
    async goToHomePage() {
      await this.page.click('a[href="/"]'); 
    }
  
    async verifyProductInCartOnHomePage() {
      await this.page.hover('a[href="/checkout/cart"]'); 
      await expect(this.page.locator('text=1')).toBeVisible(); 
    }
  
    async goToCheckout() {
      await this.page.getByRole('button', { name: 'Place Order' }).click(); 
    }
  }
  