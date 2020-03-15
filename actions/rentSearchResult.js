import { t } from 'testcafe';
import  SearchResultPagePO  from '../pages/SearchResultPage/SearchResultPagePO'

// Actions exports
export * from './rentSearchBar';
export * from './common/sortMenu';

/**
 * Selects no promo appartment by index
 *@param {index} index Index to select appartment
 */
export async function selectNoPromoAppartmentByIndex(index){
    await t.click(SearchResultPagePO.noPromoItems(index));
}