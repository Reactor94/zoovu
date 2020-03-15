import { Selector } from 'testcafe';


export default class SearchResultPagePO {

    static noPromoItems = n => Selector('[data-featured-name="listing_no_promo"]').nth(n);

}