
export class ProductDetail {
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
  
    async goToBag() {
      await this.page.getByRole('link', { name: 'Go to Bag' }).click();
    }
  
    async checkProductInBag(productName) {
      await expect(this.page.getByText(productName)).toBeVisible();
    }
  }
  
