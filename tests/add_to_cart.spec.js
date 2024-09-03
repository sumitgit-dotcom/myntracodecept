
import { test, expect } from '@playwright/test';
import { AddToCart } from '../../pages/AddToCart';

test('Add to Cart Test', async ({ page }) => {  
  const addToCartPage = new AddToCart(page);
  
 
  await addToCartPage.goto('https://www.myntra.com/product-url'); 

  await addToCartPage.selectSize('M'); 
  
  
  await addToCartPage.clickAddToBag();

  
  await addToCartPage.viewBag();
  
 
  await addToCartPage.verifyProductInBag('Product Name'); 
});
