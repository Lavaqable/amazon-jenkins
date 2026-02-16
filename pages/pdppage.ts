import { Page } from '@playwright/test';
import { PDPPageLocator } from '../locators/pdppagelocator';

export class PDPPage {
  
  static locator = new PDPPageLocator();

  static async addToCart(page: Page) {
    await page.waitForLoadState('domcontentloaded');
    const addToCartBtn = page.locator(this.locator.addToCartButton).filter({ hasText: /add to cart/i }).first(); 
    await addToCartBtn.waitFor({ state: 'visible', timeout: 30000 });
    //await addToCartBtn.scrollIntoViewIfNeeded();
await addToCartBtn.click();
  }
 static async addToCart1(page: Page) {
    await page.waitForLoadState('domcontentloaded');
    const addToCartBtn = page.locator(this.locator.addToCartBtn).filter({ hasText: /add to cart/i }).first(); 
    await addToCartBtn.waitFor({ state: 'visible', timeout: 3000 });
    //await addToCartBtn.scrollIntoViewIfNeeded();
await addToCartBtn.click();
  }
//  static async addToCart(page: Page) {
//   await page.waitForLoadState('domcontentloaded');

//   const addToCartBtn = page.locator('button:has-text("Add to Cart")').first();

//   console.log('Waiting for Add to Cart button to be visible');
//   await addToCartBtn.waitFor({ state: 'visible', timeout: 60000 });
//   console.log('Add to Cart button is visible');

//   await addToCartBtn.scrollIntoViewIfNeeded();
//   await addToCartBtn.click({ force: true });

//   console.log('Clicked Add to Cart successfully');
// }

  static async searchInCategory(
    page: Page,categoryValue: string,searchText: string) {
    await page.locator(this.locator.departmentDropdown).selectOption(categoryValue);
    await page.locator(this.locator.searchBox).fill(searchText);
    await page.locator(this.locator.searchGoButton).click();
  }

//   static async openSponsoredProduct(page: Page, product: string): Promise<Page> {

//   const locator = this.locator.sponsoredProductLink.replace('%TEXT%', product);

//   const [newPage] = await Promise.allSettled([
//     page.context().waitForEvent('page', { timeout: 5000 }),
//     page.locator(locator).first().click()
//   ]);

//   // If new tab opened
//   if (newPage.status === 'fulfilled') {
//     const popupPage = newPage.value as Page;
//     await popupPage.waitForLoadState();
//     return popupPage;
//   }

//   // If opened in same tab
//   await page.waitForLoadState();
//   return page;
// }
// static async openSponsoredProduct(page: Page, brand: string): Promise<Page> {

//     await Promise.all([
//         page.waitForLoadState('domcontentloaded'),
//         page.click(`text=${brand}`)
//     ]);

//     // Small stabilization wait for CI
//     await page.waitForTimeout(2000);

//     return page;
// }
  static async openSponsoredProduct(page: Page, product: string): Promise<Page> {
    const popup = page.waitForEvent('popup');
    const locator = this.locator.sponsoredProductLink.replace('%TEXT%', product);
    await page.locator(locator).first().click();
    return await popup;
  }

}
