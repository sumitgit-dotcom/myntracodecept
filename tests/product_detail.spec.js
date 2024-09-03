
import { test, expect } from '@playwright/test';
import { ProductDetail } from '../../pages/ProductDetail';

test('Product Detail Page Test', async ({ page }) => {  
  const productDetailPage = new ProductDetail(page);
  
 
  await productDetailPage.goto('https://www.myntra.com/product-url'); 

  
  await productDetailPage.selectSize('M'); 
  
 
  await productDetailPage.clickAddToBag();

 
  await productDetailPage.goToBag();
  
 
  await productDetailPage.checkProductInBag('Product Name'); 
});
