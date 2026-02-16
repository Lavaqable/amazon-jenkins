export class PLPPageLocator {

  productLink ="//a[.//span[contains(normalize-space(),'%TEXT%')]]";

  sponsoredProductLink = "//span[contains(text(),'Sponsored')]/ancestor::div//a[.//span[contains(text(),'%TEXT%')]]";

  seeMoreBrandButton ="//button[.//span[normalize-space()='See more']]";

  samsungBrand = "//a[@aria-label='Remove the filter Samsung to expand results']"
    //"//span[normalize-space()='Samsung' or normalize-space()='SAMSUNG']";

  maxPriceInput = "//form[@class='sf-range-slider a-spacing-none a-declarative']"
    //"//input[@id='high-price']";
priceGoButton = "//input[@type='submit']";

 washingMachineSuggestion = 'role=button[name="washing machine 7kg"]';

samsungFilter = 'role=link[name^="Apply the filter Samsung"]';

maxPriceSlider = 'role=slider[name="Maximum price"]';

sponsoredSamsungProduct ="//a[@title='Samsung Smart Choice 10 Kg, 5 Star, AI Wash, AI Energy Mode, Wi-Fi, Ecobubble, AI VRT+, Soft Closing Door, Digital Inverter, Fully-Automatic Top Load Washing Machine (WA80F10E2LTL, Lavender Gray)']//"
//  "(//a[@class='a-link-normal _c2Itd_link_2AMAT _c2Itd_productTitle_1rGyG _c2Itd_productTitle_1vCSB'][contains(text(),'Samsung Smart Choice 10 Kg, 5 Star, AI Wash, AI En')])[1]"
   // 'role=link[name^="Sponsored Ad - Samsung 7 kg"]';
}