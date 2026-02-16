import { Page, expect } from '@playwright/test';
import { CartPageLocator } from '../locators/cartpagelocator';

export class CartPage {
  static locator = new CartPageLocator();

  static async goToCart(page: Page) {
    await page.locator(this.locator.goToCartButton).click();
  }

  static async verifyCartPage(page: Page) {
    await expect(page.getByRole('heading', { name: /Shopping Cart/i })).toBeVisible({ timeout: 15000 });
  }
}
