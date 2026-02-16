import { Page } from '@playwright/test';
import { PLPPageLocator } from '../locators/plppagelocator';

export class PLPPage {
  static locator = new PLPPageLocator();

  static async openProductInNewTab(page: Page, product: string): Promise<Page> {
    const popupPromise = page.waitForEvent('popup'); 
    const locator = this.locator.productLink.replace('%TEXT%', product);
    await page.locator(locator).first().click();
    return await popupPromise;
  }

// static async openProductInNewTab(page: Page, productName: string): Promise<Page> {

//     await Promise.all([
//         page.waitForLoadState('domcontentloaded'),
//         page.click(`text=${productName}`)
//     ]);

//     await page.waitForTimeout(2000);

//     return page;
// }


  static async searchWashingMachine(page: Page) {
    await page.getByRole('button', { name: 'washing machine 7kg' }).click();
  }

  static async applySamsungFilter(page: Page) {
    const samsung = page.getByRole('link', {name: /^Apply the filter Samsung/});
    await samsung.scrollIntoViewIfNeeded();
    await samsung.click();
  }

  static async applyPriceFilter(page: Page) {
    const maxSlider = page.getByRole('slider', { name: 'Maximum price' });
    await maxSlider.fill('88'); 
  }
static async openSponsoredProduct(page: Page, product: string): Promise<Page> {
  const locator = this.locator.sponsoredProductLink.replace('%TEXT%', product);
  const link = page.locator(locator).first();

  const target = await link.getAttribute('target');
  if (target === '_blank') {
    const popupPromise = page.waitForEvent('popup');
    await link.click();
    return await popupPromise;
  } else {
    await link.click();
    return page;
  }
}
}