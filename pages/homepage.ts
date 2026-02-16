import { Page } from '@playwright/test';
import { HomePageLocator } from '../locators/homepagelocator';

export class HomePage {

  static locator = new HomePageLocator();

  static async navigate(page: Page) {
    await page.goto('https://www.amazon.in/');
  }

  static async searchProduct(page: Page, text: string) {
    await page.locator(this.locator.searchBox).fill(text);
  }

  static async clickSuggestedSearch(page: Page, text: string) {
    const locator = this.locator.searchSuggestion.replace('%TEXT%', text);
    await page.locator(locator).click();
  }
}