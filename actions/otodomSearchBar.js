import { t } from 'testcafe';
import HomePage from '../pages/HomePage';

/**
 * Searches city by entering text in searching field
 * @param {string} city City to find in searching field
 * @param {string} location Location to select after entering city in searching field
 */
export async function findCityByTyping(city, location) {
  await t.click(HomePage.searchingFieldLabel);
  await t.typeText(HomePage.searchField, city);
  await t.click(HomePage.selectLocation(location));
  await t.click(HomePage.showButton);
}