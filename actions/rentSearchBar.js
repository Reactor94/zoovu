import { t } from 'testcafe';
import RentSearchResultsPage from '../pages/RentSearchResultsPage';
import { FilterExtrasType } from '../enum/extraType';

/**
 * Selects extras type
 * @param {type} [type] type of the additional information
 */
export async function selectExtraType(type) {
  await t.click(RentSearchResultsPage.moreOption);
  await t.click(getTypeBtn(type));
}

/**
 * Click find button
 */
export async function clickFindButton() {
  await t.click(RentSearchResultsPage.findButton);
}

/*
* Returns the selector for the given extra type type
* @param {ExtraType} type
* @returns
*/
function getTypeBtn(type) {
  if (type == FilterExtrasType.AIR_CONDITION) {
    return RentSearchResultsPage.airCondition;
  }
}