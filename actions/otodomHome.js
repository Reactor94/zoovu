import { t } from 'testcafe';
import OtodomSearchBarPO from '../pages/HomePage/OtodomSearchBarPO';

/**
 * Clicks on the Rent category in searching bar
 */
export async function clickRentCategory() {
    await t.click(OtodomSearchBarPO.rentCategoryButton);
  }