import { APP_URL } from '../config/config';
import * as otodomHome from '../actions/otodomHome';
import * as rentSearchResult from '../actions/rentSearchResult';
import * as appartmentDescription from '../actions/appartmentDescription';
import { FilterExtrasType } from '../enum/extraType';
import { SortType } from '../enum/sortType';

fixture`Search rent apartments`.page(APP_URL).beforeEach(async t => {
  await t.maximizeWindow();
});

test('Should show the lowest price for renting an apartment', async () => {
  const searchCity = 'Warszawa';
  const location = 'Warszawa, mazowieckie';

  await otodomHome.clickRentCategory();
  await otodomHome.findCityByTyping(searchCity, location);

  await rentSearchResult.selectExtraType(FilterExtrasType.AIR_CONDITION);
  await rentSearchResult.clickFindButton();

  await rentSearchResult.selectSortType(SortType.LOWEST_PRICE);
  await rentSearchResult.selectNoPromoAppartmentByIndex(0);


  const price = await appartmentDescription.getAppartmentPrice();
  console.log(`Lowest price for apartment in Warsaw  is ${price}`)
});