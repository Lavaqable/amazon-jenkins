
import { test } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { PLPPage } from './pages/plppage';
import { PDPPage } from './pages/pdppage';
import { CartPage } from './pages/cartpage';

test('Amazon search with click 5th product and dropdown option select the random product', { tag: ['@regression'] }, async ({ page }) => {

    await test.step('Step 1: Navigate to Amazon', async () => {
    await HomePage.navigate(page);
    });

    await test.step('Step 2: Search mobile and select suggested search', async () => {
    await HomePage.searchProduct(page, 'mobile');
    await HomePage.clickSuggestedSearch(page, 'mobile under 10000 5g phone');
    });

    const mobilePage = await test.step('Step 3: Open Samsung mobile PDP in new tab',async () => {
    return await PLPPage.openProductInNewTab(page,'Samsung Galaxy');
    });

    await test.step('Step 4: Add mobile to cart', async () => {
    await PDPPage.addToCart(mobilePage);
    });

    await test.step('Step 5: Search laptop in Computers category', async () => {
    await PDPPage.searchInCategory(mobilePage,'search-alias=computers','laptop');
    });

    const laptopPage = await test.step('Step 6: Open sponsored laptop PDP',async () => {
    return await PDPPage.openSponsoredProduct(mobilePage,'Lenovo');
      });

    await test.step('Step 7: Add laptop to cart and go to cart', async () => {
    await PDPPage.addToCart(laptopPage);
    await CartPage.goToCart(laptopPage);
    await page.waitForTimeout(3000);
    });

    await test.step('Step 8: Search washing machine in Appliances category', async () => {
    await PDPPage.searchInCategory(laptopPage,'search-alias=appliances','washing machine 7kg');
    });

    await test.step('Step 9: Apply Samsung filter and price range', async () => {
    await PLPPage.applySamsungFilter(laptopPage);
    await PLPPage.applyPriceFilter(laptopPage);
    });

    const washingMachinePage = await test.step('Step 10: Open sponsored Samsung washing machine PDP',async () => {
    return await PLPPage.openSponsoredProduct(laptopPage,'Samsung');
    });

    await test.step('Step 11: Add washing machine to cart', async () => {
    await PDPPage.addToCart(washingMachinePage);
    });

    await test.step('Step 12: Navigate to Cart and verify cart page', async () => {
    await CartPage.goToCart(washingMachinePage);
    //await page.waitForTimeout(1000);
    //await CartPage.verifyCartPage(washingMachinePage);
    });
  });

